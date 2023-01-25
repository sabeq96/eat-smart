<script lang="ts">
	import DishCard from '$src/components/DishCard.svelte';
	import PageTitle from '$src/components/PageTitle.svelte';
</script>

<PageTitle text="What to cook?" />

<input type="text" placeholder="Search ..." class="input w-full max-w-xs mt-6" />

<div class="mt-6 grid grid-cols-2 gap-4">
	<DishCard text="Some food" />
	<DishCard text="Some food" />
	<DishCard text="Some food" />
	<DishCard text="Some food" />
	<DishCard text="Some food" />
	<DishCard text="Some food" />
	<DishCard text="Some food" />
	<DishCard text="Some food" />
</div>
