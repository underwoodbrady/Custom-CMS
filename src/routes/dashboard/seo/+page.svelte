<script>
	import Dashboard from '$lib/components/layout/Dashboard.svelte';
	import { chartRender } from '$lib/actions/chartRenderer';

	let data1 = {
		type: 'doughnut',
		data: {
			datasets: [
				{
					borderWidth: 0,
					cutout: '85%',
					data: [100, 0],
					backgroundColor: ['#159B8C', '#171918']
				}
			]
		}
	};
	let data2 = {
		type: 'doughnut',
		data: {
			datasets: [
				{
					borderWidth: 0,
					cutout: '85%',
					data: [95, 5],
					backgroundColor: ['#159B8C', '#171918']
				}
			]
		}
	};
	let data3 = {
		type: 'doughnut',
		data: {
			datasets: [
				{
					borderWidth: 0,
					cutout: '85%',
					data: [82, 18],
					backgroundColor: ['#159B8C', '#171918']
				}
			]
		},
		options: {
			maintainAspectRatio: false
		}
	};
</script>

<Dashboard title="SEO">
	<p class="mb-md font-medium">Summary</p>

	<div class="flex items-center space-x-md mb-lg">
		<div class="flex flex-col items-center">
			<div class="relative w-16 h-16 mb-sm">
				<div
					class="absolute left-0 top-0 w-[calc(100%-14px)] h-[calc(100%-14px)] bg-tealdark-5 rounded-full mt-[10px] ml-[8px] text-tealdark-12 flex items-center justify-center font-medium text-xl"
				>
					<p class="mt-xs">100</p>
				</div>
				<canvas use:chartRender={data1} class="relative z-10"> </canvas>
			</div>
			<p class="text-xs text-sagedark-11">Performance</p>
		</div>
		<div class="flex flex-col items-center">
			<div class="relative w-16 h-16 mb-sm">
				<div
					class="absolute left-0 top-0 w-[calc(100%-14px)] h-[calc(100%-14px)] bg-tealdark-5 rounded-full mt-[10px] ml-[8px] text-tealdark-12 flex items-center justify-center font-medium text-xl"
				>
					<p class="mt-xs">95</p>
				</div>
				<canvas use:chartRender={data2} class="relative z-10"> </canvas>
			</div>
			<p class="text-xs text-sagedark-11">Accessibility</p>
		</div>
		<div class="flex flex-col items-center">
			<div class="relative w-16 h-16 mb-sm">
				<div
					class="absolute left-0 top-0 w-[calc(100%-14px)] h-[calc(100%-14px)] bg-tealdark-5 rounded-full mt-[10px] ml-[8px] text-tealdark-12 flex items-center justify-center font-medium text-xl"
				>
					<p class="mt-xs">82</p>
				</div>
				<canvas use:chartRender={data3} class="relative z-10"> </canvas>
			</div>
			<p class="text-xs text-sagedark-11">Best Practices</p>
		</div>
		<div class="flex flex-col items-center">
			<div class="relative w-16 h-16 mb-sm">
				<div
					class="absolute left-0 top-0 w-[calc(100%-14px)] h-[calc(100%-14px)] bg-tealdark-5 rounded-full mt-[10px] ml-[8px] text-tealdark-12 flex items-center justify-center font-medium text-xl"
				>
					<p class="mt-xs">82</p>
				</div>
				<canvas use:chartRender={data3} class="relative z-10"> </canvas>
			</div>
			<p class="text-xs text-sagedark-11">SEO</p>
		</div>
	</div>
	<p class="mb-md font-medium">Metrics</p>
	<div class="max-w-[500px] grid gap-md grid-cols-2">
		<div class="flex space-x-sm bg-sagedark-3 p-md rounded-md">
			<div class="w-3 h-3 rounded-full bg-tealdark-9 mt-xs"></div>
			<div>
				<p class="mb-sm">First Contentful Paint</p>
				<p class="text-2xl text-tealdark-9 font-medium">0.7s</p>
			</div>
		</div>
		<div class="flex space-x-sm bg-sagedark-3 p-md rounded-md">
			<div class="w-3 h-3 rounded-full bg-tealdark-9 mt-xs"></div>
			<div>
				<p class="mb-sm">Largest Contentful Paint</p>
				<p class="text-2xl text-tealdark-9 font-medium">3.1s</p>
			</div>
		</div>
		<div class="flex space-x-sm bg-sagedark-3 p-md rounded-md">
			<div class="w-3 h-3 rounded-full bg-tealdark-9 mt-xs"></div>
			<div>
				<p class="mb-sm">Total Blocking Time</p>
				<p class="text-2xl text-tealdark-9 font-medium">0ms</p>
			</div>
		</div>
		<div class="flex space-x-sm bg-sagedark-3 p-md rounded-md">
			<div class="w-3 h-3 rounded-full bg-tealdark-9 mt-xs"></div>
			<div>
				<p class="mb-sm">Speed Index</p>
				<p class="text-2xl text-tealdark-9 font-medium">0.7s</p>
			</div>
		</div>
	</div>
	
</Dashboard>
