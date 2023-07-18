<script>
	// @ts-nocheck

	import { onMount, afterUpdate } from 'svelte';
	import Chart from 'chart.js/auto';

	let myChart;
	let chartContainer;

	export let pieData = {
		labels: ['Italy', 'France', 'Spain', 'USA', 'Argentina'],
		data: [55, 49, 44, 24, 15],
		backgroundColours: [
			'#e6f6ff',
			'#bae3ff',
			'#7cc4fa',
			'#47a3f3',
			'#2186eb',
			'#0967d2',
			'#0552b5',
			'#03449e',
			'#01337d',
			'#002159',
			'#000000'
		],
		title: 'World Wide Wine Production 2018'
	};

	onMount(() => {
		createChart();
	});

	afterUpdate(() => {
		if (myChart) {
			myChart.destroy();
		}
		createChart();
	});

	function createChart() {
		myChart = new Chart(chartContainer, {
			type: 'pie',
			data: {
				labels: pieData.labels,
				datasets: [
					{
						backgroundColor: pieData.backgroundColours,
						data: pieData.data
					}
				]
			},
			options: {
				title: {
					display: true,
					text: pieData.title
				}
			}
		});
	}
</script>

<h1 class="p-5 text-surface-900 text-label-xl text-center">{pieData.title}</h1>

<div class="flex items-center justify-center w-full h-fit pb-5">
	<div class="max-w-full w-[500px]">
		<canvas bind:this={chartContainer} class="w-full" />
	</div>
</div>
