<script lang="ts">
	import Dashboard from '$lib/components/layout/Dashboard.svelte';
	import { chartRender } from '$lib/actions/chartRenderer';
	let data1 = {
		type: 'line',
		data: {
			labels:["jan","feb","mar","apr","jun"],
			datasets: [
				{
					label: 'Dataset 1',
					data:  [0, 2,4,5,8],
					borderColor: '#fff',
					backgroundColor:'#fff'
				},
				{
					label: 'Dataset 2',
					data:  [4,2,5,9,0],
					borderColor: '#159B8C',
					backgroundColor: '#159B8C',
				}
			]
		}
	};
</script>

<Dashboard title="Analytics" subtitle="Last Updated 12/4/2024" showSafeEditMode={false}>
	<p class="mb-md font-medium">Performance</p>
	<canvas use:chartRender={data1} class="relative z-10"> </canvas>
</Dashboard>
