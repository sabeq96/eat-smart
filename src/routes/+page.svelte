<script lang="ts">
	import DishCard from '$src/components/DishCard.svelte';
	import PageTitle from '$src/components/PageTitle.svelte';
	import { getRecipes, type GetRecipesQuery, type GetRecipesResult } from '$src/gql/getRecipes';
	import LoadingIcon from '$src/icons/LoadingIcon.svelte';
	import { debounce } from 'lodash';
	import { query } from 'svelte-apollo';

	let search = '%';

	const onSearch = debounce((e: Event) => {
		console.log('dupa');
		const target = e.target as HTMLInputElement;
		search = target.value ? `%${target.value}%` : '%';
	}, 1000);

	$: recipes = query<GetRecipesResult, GetRecipesQuery>(getRecipes, {
		variables: { search }
	});

	$: data = $recipes.data?.recipe || [];
</script>

<PageTitle text="What to cook?" />

<input
	type="text"
	placeholder="Search ..."
	class="input w-full max-w-xs mt-6"
	on:input={onSearch}
/>

<div class="mt-6 columns-2 gap-4">
	{#each data as recipe}
		<div class="break-inside-avoid mb-4">
			<DishCard text={recipe.name} image={recipe.image} />
		</div>
	{/each}
</div>

{#if $recipes.loading}
	<div class="w-full flex">
		<LoadingIcon />
	</div>
{/if}
