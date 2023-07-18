<script>
	// @ts-nocheck

	import { onMount, afterUpdate } from 'svelte';
	import Chart from 'chart.js/auto';

	let myChart;

	let chartContainer;

	export let barData;

	onMount(() => {
		createChart();
	});

	afterUpdate(() => {
		console.log('barData after update: ', barData);
		if (myChart) {
			myChart.destroy();
		}
		createChart();
	});

	function createChart() {
		myChart = new Chart(chartContainer, barData);
	}
</script>

<div class="flex items-center justify-center w-full h-fit pb-5">
	<div class="max-w-full w-[500px]">
		<canvas bind:this={chartContainer} class="w-full" />
	</div>
</div>
