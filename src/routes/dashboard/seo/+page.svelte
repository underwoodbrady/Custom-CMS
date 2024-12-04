<script>
	import Dashboard from '$lib/components/layout/Dashboard.svelte';
	import IconCheck from '~icons/mdi/check-circle';
	import IconLighthouse from '~icons/mdi/lighthouse-on';
	import IconArrow from '~icons/mdi/arrow-right-thin';
	import IconInfo from '~icons/mdi/info';
	import ScoreDoughnut from '$lib/components/SEO/ScoreDoughnut.svelte';
	import MetricCard from '$lib/components/SEO/MetricCard.svelte';

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

<Dashboard title="SEO & Performance" subtitle="Last Updated 12/4/2024" showSafeEditMode={false}>
	<div class="flex justify-between">
		<div>
			<p class="mb-md font-medium">Summary</p>
			<div class="flex items-center space-x-md mb-lg">
				<ScoreDoughnut label="Performance" score="100" data={data1}/>
				<ScoreDoughnut label="Accessibility" score="95" data={data2}/>
				<ScoreDoughnut label="Best Practices" score="82" data={data3}/>
				<ScoreDoughnut label="SEO" score="95" data={data2}/>
			</div>
			<p class="mb-md font-medium">Metrics</p>
			<div class="max-w-[500px] grid gap-md grid-cols-2 mb-lg">
				<MetricCard title="First Contentful Paint" time="0.7 s">
					<p>
						<span class="font-semibold text-sagedark-12">First contentful paint</span> is the time it takes
						for the first piece of content to render on the page.
					</p>
				</MetricCard>
				<MetricCard title="Largest Contentful Paint" time="3.1 s">
					<p>
						<span class="font-semibold text-sagedark-12">Largest contentful paint</span> is the time it takes for the largest visible element to load on the page.
					</p>
				</MetricCard>
				<MetricCard title="Total Blocking Time" time="0 ms">
					<p>
						<span class="font-semibold text-sagedark-12">Total blocking time</span> is the duration
						between First Contentful Paint and Time to Interactive when the main thread is blocked.
					</p>
				</MetricCard>
				<MetricCard title="Speed Index" time="0.7s">
					<p>
						<span class="font-semibold text-sagedark-12">Speed index</span> is a measure of how quickly
						the content of a page is visually displayed
					</p>
				</MetricCard>
			</div>
			<a href="https://pagespeed.web.dev/" target="_blank" class="text-sagedark-11 bg-sagedark-5 hover:bg-sagedark-6 active:bg-sagedark-7 transition-colors duration-100 rounded-md py-sm px-md w-full text-sm flex items-center justify-between" >
				<div class="flex items-center space-x-sm">
					<IconLighthouse/>
					<p>Data Captured With Google Lighthouse</p>
				</div>
			
				<IconArrow class="text-lg"/>
			</a>
		</div>
		<div class="sticky right-xl top-4xl">
			<h3 class="font-medium mb-md">SEO Checklist</h3>
			<div class="flex flex-col space-y-md">
				<div class="flex items-center space-x-sm text-sm">
					<div class="w-6 h-6 rounded-full bg-sagedark-4 flex items-center justify-center  font-medium">1.</div>
					<a class="text-sagedark-11 hover:text-sagedark-12 hover:underline" href="/dashboard/seo">Optimize performance</a>
					<IconCheck class="text-teal-9 w-5 h-5"/>
				</div>
				<div class="flex items-center space-x-sm text-sm">
					<div class="w-6 h-6 rounded-full bg-sagedark-4 flex items-center justify-center  font-medium">2.</div>
					<a class="text-sagedark-11 hover:text-sagedark-12 hover:underline transition-colors duration-100" href="/dashboard/branding">Clear & Descriptive Branding</a>
					<IconCheck class="text-teal-9 w-5 h-5"/>
				</div>
				<div class="flex items-center space-x-sm text-sm">
					<div class="w-6 h-6 rounded-full bg-sagedark-4 flex items-center justify-center  font-medium">3.</div>
					<a class="text-sagedark-11 hover:text-sagedark-12 hover:underline transition-colors duration-100" href="/dashboard/sitecontent">Quality Content</a>
					<IconCheck class="text-teal-9 w-5 h-5"/>
				</div>
				<div class="flex items-center space-x-sm text-sm">
					<div class="w-6 h-6 rounded-full bg-sagedark-4 flex items-center justify-center  font-medium">4.</div>
					<a class="text-sagedark-11 hover:text-sagedark-12 hover:underline transition-colors duration-100" href="https://mailchimp.com/resources/what-is-backlinking-and-why-is-it-important-for-seo/" target="_blank">Backlinking</a>
					<IconInfo class="text-sagedark-9 w-5 h-5"/>
				</div>
			</div>
		</div>
	</div>
</Dashboard>
