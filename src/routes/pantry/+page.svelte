<script lang="ts">
	import IngredientCard from '$src/components/IngredientCard.svelte';
	import PageTitle from '$src/components/PageTitle.svelte';
	import SortIcon from '$src/components/SortIcon.svelte';
	import LoadingIcon from '$src/icons/LoadingIcon.svelte';

	import {
		getPantry,
		type GetPantryQuery,
		type GetPantryResult,
		type Pantry
	} from '$src/gql/getPantry';
	import { query } from 'svelte-apollo';
	import { reduce, chain, get } from 'lodash';
	import { isBefore } from 'date-fns';

	const sortOptions: { name: string; value: keyof Pantry }[] = [
		{ name: 'Name', value: 'ingredient.name' as keyof Pantry },
		{ name: 'Expiration', value: 'exp' },
		{ name: 'Amount', value: 'qt' }
	];
	let sortAsc: boolean = false;
	let sortItem: string = sortOptions[0].value;

	let filterOptions: { id: number; name: string; value: number }[] = [
		{ id: 0, name: '', value: 0 }
	];
	let filterItem = 1;

	$: pantry = query<GetPantryResult, GetPantryQuery>(getPantry, {
		variables: { parent: filterItem }
	});

	$: if ($pantry.data) {
		filterOptions = $pantry.data?.parents.map((p) => ({ id: p.id, name: p.name, value: 11 }));
	}

	$: pantryItems = chain($pantry.data?.pantry || [])
		.groupBy('ingredient.id')
		.map((p) => ({
			...reduce(p, (prev, curr) => ({
				...curr,
				exp: isBefore(new Date(prev.exp), new Date(curr.exp)) ? prev.exp : curr.exp,
				qt: curr.qt + prev.qt || 0,
				ingredient: {
					id: curr.id,
					name: curr.ingredient.name,
					image: curr.ingredient.image,
					unit: curr.ingredient.unit,
					gram_per_unit: curr.ingredient.gram_per_unit
				}
			}))
		}))
		.orderBy((p) => get(p, sortItem), sortAsc ? 'asc' : 'desc')
		.value();

	function toggleSort() {
		sortAsc = !sortAsc;
	}

	function selectOption(event: Event & { currentTarget: HTMLSelectElement & EventTarget }) {
		sortItem = event.currentTarget.value;
	}

	function selectFilter(filter: number) {
		filterItem = filter;
	}
</script>

<PageTitle text="Pantry" />

<div class="flex gap-4 overflow-x-scroll py-4 cursor-pointer">
	{#each filterOptions as item}
		<div
			class="whitespace-nowrap"
			class:text-primary-focus={item.id === filterItem}
			on:click={() => selectFilter(item.id)}
			on:keypress={() => selectFilter(item.id)}
		>
			{item.name}
			<span class="badge ml-1 badge-outline">{item.value}</span>
		</div>
	{/each}
</div>

<div class="py-6 flex flex-nowrap items-center gap-2">
	<div on:click={toggleSort} on:keypress={toggleSort}>
		<SortIcon top={sortAsc} />
	</div>
	<select class="select select-md select-bordered" on:change={selectOption}>
		{#each sortOptions as option}
			<option value={option.value} selected={sortItem === option.value}>{option.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col gap-4">
	{#if $pantry.loading}
		<LoadingIcon />
	{/if}

	{#each pantryItems as item}
		<IngredientCard {...item} {...item.ingredient} />
	{/each}
</div>
