<script lang="ts">
	import Dashboard from '$lib/components/layout/Dashboard.svelte';
	import { chartRender } from '$lib/actions/chartRenderer';
	import IconInfo from '~icons/mdi/information-outline';

	const labels = [
		'2024-12-03',
		'2024-12-02',
		'2024-12-01',
		'2024-11-30',
		'2024-11-29',
		'2024-11-28',
		'2024-11-27',
		'2024-11-26',
		'2024-11-25',
		'2024-11-24',
		'2024-11-23',
		'2024-11-22',
		'2024-11-21',
		'2024-11-20',
		'2024-11-19',
		'2024-11-18',
		'2024-11-17',
		'2024-11-16',
		'2024-11-15',
		'2024-11-14',
		'2024-11-13',
		'2024-11-12',
		'2024-11-11',
		'2024-11-10',
		'2024-11-09',
		'2024-11-08',
		'2024-11-07',
		'2024-11-06',
		'2024-11-05',
		'2024-11-04',
		'2024-11-03',
		'2024-11-02',
		'2024-11-01',
		'2024-10-31',
		'2024-10-30',
		'2024-10-29',
		'2024-10-28',
		'2024-10-27',
		'2024-10-26',
		'2024-10-25',
		'2024-10-24',
		'2024-10-23',
		'2024-10-22',
		'2024-10-21',
		'2024-10-20',
		'2024-10-19',
		'2024-10-18',
		'2024-10-17',
		'2024-10-16',
		'2024-10-15',
		'2024-10-14',
		'2024-10-13',
		'2024-10-12',
		'2024-10-11',
		'2024-10-10',
		'2024-10-09',
		'2024-10-08',
		'2024-10-07',
		'2024-10-06',
		'2024-10-05',
		'2024-10-04',
		'2024-10-03',
		'2024-10-02',
		'2024-10-01',
		'2024-09-30',
		'2024-09-29',
		'2024-09-28',
		'2024-09-27',
		'2024-09-26',
		'2024-09-25',
		'2024-09-24',
		'2024-09-23',
		'2024-09-22',
		'2024-09-21',
		'2024-09-20',
		'2024-09-19',
		'2024-09-18',
		'2024-09-17',
		'2024-09-16',
		'2024-09-15',
		'2024-09-14'
	].reverse();

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Clicks',
				data: [
					0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0,
					1, 0, 2, 0, 3, 0, 2, 0, 1, 0, 0, 2, 0, 0, 1, 0, 2, 0, 2, 4, 0
				].reverse(),
				borderColor: 'rgb(0 162 199)',
				backgroundColor: 'rgb(0, 162, 199, 0.5)',
				yAxisID: 'y',
				tension: 0.2
			},
			{
				label: 'Position',
				data: [
					42.27, 49.88, 33.95, 32.56, 33.24, 33.39, 33.86, 35.21, 35.2, 36.14, 34.14, 37.29, 36.35,
					39.71, 37.35, 37.11, 32.82, 38.18, 37.52, 36.13, 36.21, 42.74, 46.83, 39.53, 42.67, 39.91,
					37.77, 44.48, 45.08, 49.72, 51.82, 53.62, 57.32, 52.67, 56.42, 48.81, 52.09, 58.4, 53.91,
					35.23, 42.2, 49.25, 51.96, 46.75, 46.77, 47.85, 48.04, 50.95, 54.72, 52.83, 47.61, 50.73,
					46.71, 57.89, 55.86, 57.0, 61.53, 54.32, 63.33, 59.19, 56.78, 55.76, 57.78, 67.59, 51.19,
					62.95, 60.05, 69.69, 59.21, 77.83, 78.42, 65.65, 76.12, 79.53, 65.93, 86.54, 70.43, 87.69,
					77.76, 42.16, 75.25
				].reverse(),
				borderColor: 'rgb(142 78 198)',
				backgroundColor: 'rgb(142, 78, 198, 0.5)',
				yAxisID: 'y1',
				tension: 0.2
			},
			{
				label: 'Impressions',
				data: [
					26, 40, 22, 18, 21, 23, 21, 19, 20, 21, 21, 17, 17, 28, 26, 18, 17, 22, 29, 23, 24, 35,
					18, 19, 21, 23, 30, 21, 24, 29, 22, 29, 25, 24, 24, 21, 22, 20, 22, 30, 25, 20, 25, 24,
					26, 20, 27, 20, 25, 23, 23, 22, 17, 19, 21, 20, 17, 19, 15, 31, 18, 25, 18, 17, 26, 22,
					19, 13, 19, 12, 12, 17, 17, 17, 15, 13, 14, 13, 17, 19, 4
				].reverse(),
				borderColor: 'rgb(18 165 148)',
				backgroundColor: 'rgba(18, 165, 148, 0.5)',
				yAxisID: 'y2',
				tension: 0.2
			}
		]
	};

	const config = {
		type: 'line',
		data: data,
		options: {
			responsive: true,
			interaction: {
				mode: 'index',
				intersect: false
			},
			plugins: {
				legend: {
					labels: {
						color: 'rgb(173 181 178)'
					}
				}
			},
			stacked: false,
			scales: {
				x: {
					ticks: {
						maxRotation: 45,
						minRotation: 45,
						color: 'rgb(173 181 178)' // Changes x-axis labels color
					},
					grid: {
						drawOnChartArea: false
					}
				},
				y: {
					// Clicks axis
					type: 'linear',
					display: false,
					grid: {
						drawOnChartArea: false
					}
				},
				y1: {
					// Position axis
					type: 'linear',
					display: false,
					reverse: true, // Reverse the scale for position
					grid: {
						drawOnChartArea: false
					}
				},
				y2: {
					// Impressions axis
					type: 'linear',
					display: false,
					grid: {
						drawOnChartArea: false
					}
				}
			}
		}
	};
</script>

<Dashboard title="Analytics" subtitle="Last Updated 12/4/2024" showSafeEditMode={false}>
	<p class="mb-md font-medium">Search Performance</p>
	<div class="border border-sagedark-4 p-lg rounded-t-md">
		<canvas use:chartRender={config} class="relative z-10"> </canvas>
	</div>
	<div class="bg-sagedark-4 w-full rounded-b-md flex">
		<div class="relative flex-1 bg-cyandark-9 hover:bg-cyandark-10 transition-colors duration-100 p-md max-w-52 rounded-bl-md">
			<div>
				<h4 class="mb-sm">Total Clicks</h4>
				<p class="text-3xl font-medium">37</p>
			</div>
			<div class="absolute right-sm bottom-sm group">
				<IconInfo
					class="text-white/60 hover:text-white/80 active:text-white/100 duration-100 transition-colors text-sm"
				/>
				<div
					class="absolute z-10 left-0 top-full w-44 invisible opacity-0 group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-1 transition-all duration-100 ease-out bg-sagedark-5 text-sagedark-11 rounded-md p-sm text-xs drop-shadow-sm"
				>
				<p>
					<span class="font-semibold text-sagedark-12">Clicks</span> is how many times a user clicked through to your site.
				</p>
				</div>
			</div>
		</div>
		<div class="relative flex-1 bg-purpledark-9 hover:bg-purpledark-10 transition-colors duration-100 p-md max-w-52">
			<div>
				<h4 class="mb-sm">Position</h4>
				<p class="text-3xl font-medium">49.5</p>
			</div>
			<div class="absolute right-sm bottom-sm group">
				<IconInfo
					class="text-white/60 hover:text-white/80 active:text-white/100 duration-100 transition-colors text-sm"
				/>
				<div
					class="absolute z-10 left-0 top-full w-44 invisible opacity-0 group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-1 transition-all duration-100 ease-out bg-sagedark-5 text-sagedark-11 rounded-md p-sm text-xs drop-shadow-sm"
				>
				<p>
					<span class="font-semibold text-sagedark-12">Position</span> is the average position of your site in search results, based on its highest position whenever it appeared in a search. The lower the better.
				</p>
				</div>
			</div>
		</div>
		<div class="relative flex-1 bg-tealdark-9 hover:bg-tealdark-10 transition-colors duration-100 p-md max-w-52">
			<div>
				<h4 class="mb-sm">Total Impressions</h4>
				<p class="text-3xl font-medium">1.72k</p>
			</div>
			<div class="absolute right-sm bottom-sm group">
				<IconInfo
					class="text-white/60 hover:text-white/80 active:text-white/100 duration-100 transition-colors text-sm"
				/>
				<div
					class="absolute z-10 left-0 top-full w-44 invisible opacity-0 group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-1 transition-all duration-100 ease-out bg-sagedark-5 text-sagedark-11 rounded-md p-sm text-xs drop-shadow-sm"
				>
				<p>
					<span class="font-semibold text-sagedark-12">Impressions</span> is how many times a user saw a link to your site in search results.
				</p>
				</div>
			</div>
		</div>
	</div>
</Dashboard>
