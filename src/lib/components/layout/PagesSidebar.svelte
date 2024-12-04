<script lang="ts">
	export let currentPage;

	let pages = [
		{
			page: 'Home',
			route: '/dashboard/sitecontent/home',
			image: '/ss1.png'
		},
		{
			page: 'Gallery',
			route: '/dashboard/sitecontent/gallery',
			image: '/ss2.png'
		},
		{
			page: 'Services',
			route: '/dashboard/sitecontent/services',
			image: '/ss3.png'
		},
		{
			page: 'About Us',
			route: '/dashboard/sitecontent/aboutus',
			image: '/ss4.png'
		},
		{
			page: 'Blog',
			route: '/dashboard/sitecontent/blog',
			image: '/ss5.png'
		},
	];
</script>

<div
	class="fixed left-56 top-0 h-screen w-52 bg-sagedark-5 py-xl flex flex-col px-lg overflow-y-auto"
>
	<h3 class=" text-lg font-medium mb-xs">Pages</h3>
	<h4 class="text-sagedark-11 mb-lg text-sm">Select one to edit</h4>
    <div class="flex flex-col space-y-md">

	{#each pages as page}
		<a href={page.route}>
			<div
				class="relative w-full h-24 bg-sagedark-4 rounded-md border border-sagedark-7 mb-sm overflow-hidden group"
			>
				<img src={page.image} alt="Page SS" class="w-full h-full object-cover" />
                {#if currentPage != page.route}
                    <div class="absolute left-0 top-0 w-full h-full bg-black/40 group-hover:bg-black/20 transition-colors duration-100"></div>
                {/if}
			</div>
			<p class="{currentPage == page.route ? "text-sagedark-12" : "text-sagedark-11"} text-sm font-medium group-hover:text-sagedark-12 transition-colors duration-100">{page.page}</p>
		</a>
	{/each}
    </div>
</div>

<style>
    	::-webkit-scrollbar {
		display: none;
	}
</style>
