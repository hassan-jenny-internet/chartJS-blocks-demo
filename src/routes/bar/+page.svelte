<script>
	// @ts-nocheck

	import BarChart from '$lib/components/BarChart.svelte';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
	import { single_field_objects, dataResource, blockParams } from './singleFieldObjects';
	import { double_field_objects, dataResourceDbl, blockParamsDbl } from './doubleFieldObjects';

	let dataSource = [];

	let chartData = {
		type: 'bar',
		data: {
			labels: [],
			datasets: [
				{
					label: '',
					backgroundColor: [],
					data: []
				}
			]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: ''
			}
		}
	};
</script>

<div class="w-full flex flex-row justify-between p-10">
	<div class="flex flex-col w-[50%]">
		<div class="w-full flex">
			<Button
				class="border rounded-md mr-2 flex text-blue-950"
				on:click={() => (dataSource = dataResource)}
				><Chevron /> <span class="ml-2">single field objects</span></Button
			>
			<Dropdown>
				{#each blockParams as param}
					<DropdownItem on:click={() => (chartData = single_field_objects(param.title))}
						>{param.title}</DropdownItem
					>
				{/each}
			</Dropdown>

			<Button
				class="border rounded-md flex text-blue-950"
				on:click={() => (dataSource = dataResourceDbl)}
				><Chevron /> <span class="ml-2">double field objects</span></Button
			>
			<Dropdown>
				{#each blockParamsDbl as param}
					<DropdownItem on:click={() => (chartData = double_field_objects(param.title))}
						>{param.title}</DropdownItem
					>
				{/each}
			</Dropdown>
		</div>
		<pre class="text-xs bg-slate-200 mt-10 p-5 rounded-lg">
            {JSON.stringify(dataSource, null, 2)}
        </pre>
	</div>
	<div class="w-[50%] flex flex-col justify-center">
		<BarChart bind:barData={chartData} />
	</div>
</div>
