<script lang="ts">
	export let image: string = '';
	export let text: string = '';
</script>

<div class="card card-compact bg-base-200 shadow-xl">
	<figure class="box-border px-6 pt-6">
		<img src={image} alt={text} class="rounded-xl" />
	</figure>
	<div class="card-body items-center text-center">
		<p class="font-semibold">{text}</p>
	</div>
</div>
