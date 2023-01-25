<script lang="ts">
	import { differenceInDays } from 'date-fns'

	export let id: number = 0;
	export let name: string = '';
	export let exp: string = '';
	export let qt: number = 0;
	export let unit: string = '';
	export let gram_per_unit: number = 0;

	function getAgoText(ago: number) {
		if (ago < 0) return `overdue ${Math.abs(ago)} days`;
		else if (ago === 0) return "today";
		return `in ${ago} days`;
	}

	const numberFormatter = Intl.NumberFormat("en", {maximumFractionDigits: 2});

	$: agoText = getAgoText(differenceInDays(new Date(exp), new Date()));
	$: units = numberFormatter.format(qt/gram_per_unit);
</script>

<div class="card bg-base-200 shadow-xl">
	<div class="flex justify-between p-4">
		<div class="flex justify-between items-start gap-4">
			<figure>
				<img
					src="https://placeimg.com/400/225/arch"
					alt="Shoes"
					class="h-12 w-12 object-cover rounded-md"
				/>
			</figure>
			<div>
				<p>{name}</p>
				<p class="text-xs mt-1">{agoText}</p>
			</div>
		</div>
		<p>{units} {unit}</p>
	</div>
</div>
