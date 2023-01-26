<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import PantryIcon from '$src/icons/PantryIcon.svelte';
	import ReceipIcon from '$src/icons/ReceipIcon.svelte';
	import SettingsIcon from '$src/icons/SettingsIcon.svelte';
	import { endsWith } from 'lodash';

	const menu: { to: string; icon: ConstructorOfATypedSvelteComponent }[] = [
		{
			to: `${base}`,
			icon: ReceipIcon
		},
		{
			to: `${base}/pantry`,
			icon: PantryIcon
		},
		{
			to: `${base}/options`,
			icon: SettingsIcon
		}
	];

	$: getActive = (m: string): string => (endsWith(m, $page.url.pathname) ? 'active' : '');
</script>

<ul class="menu menu-horizontal bg-base-100 w-full justify-between">
	{#each menu as m}
		<li class="flex-1">
			<a class={`w-full flex justify-center ${getActive(m.to)}`} href={m.to}>
				<svelte:component this={m.icon} />
			</a>
		</li>
	{/each}
</ul>
