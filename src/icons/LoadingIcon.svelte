<script lang="ts">
	export let size: 'sm' | 'md' = 'md';
	export let width = '100%';

	$: sm = size === 'sm';
	$: md = size === 'md';
</script>

<div style:width class:p-2={sm} class:p-6={md} class="wrapper">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="loading"
		class:w-6={sm}
		class:h-6={sm}
		class:w-12={md}
		class:h-12={md}
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
		/>
	</svg>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}

	.loading {
		animation-name: loading-kf;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}

	@keyframes loading-kf {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 360deg;
		}
	}
</style>
