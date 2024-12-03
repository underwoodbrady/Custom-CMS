<script lang="ts">
	import IconBranding from '~icons/mdi/palette-outline';
	import IconContent from '~icons/mdi/file-document-outline';
	import IconAnalytics from '~icons/mdi/chart-line';
	import IconSEO from '~icons/mdi/search-web';
	import IconBlog from '~icons/mdi/post-outline';
	import IconGallery from '~icons/mdi/image-multiple-outline';
	import IconEmail from '~icons/mdi/email-outline';
	import IconHelp from '~icons/mdi/help-circle-outline';
	import IconLogout from '~icons/mdi/logout';

	export let currentPage;

	let pages = [
		{
			page: 'Branding',
			route: '/dashboard/branding',
			icon: IconBranding
		},
		{
			page: 'Site Content',
			route: '/dashboard/sitecontent',
			icon: IconContent
		},
		{
			isDivider: true
		},
		{
			page: 'Analytics',
			route: '/dashboard/analytics',
			icon: IconAnalytics
		},
		{
			page: 'SEO',
			route: '/dashboard/seo',
			icon: IconSEO
		},
		{
			isDivider: true
		},
		{
			page: 'Blog',
			route: '/dashboard/blog',
			icon: IconBlog
		},
		{
			page: 'Gallery Upload',
			route: '/dashboard/galleryupload',
			icon: IconGallery
		},
		{
			page: 'Email',
			route: '/dashboard/email',
			icon: IconEmail
		},
		{
			isDivider: true
		},
		{
			page: 'Help & Support',
			route: '/support',
			icon: IconHelp
		}
	];

	const user = 'User'; //TODO: Fill in
</script>

<aside class="h-screen w-56 bg-sagedark-3 pt-xl flex flex-col justify-between">
	<div>
		<h1 class="px-lg text-xl font-semibold mb-lg">Title</h1>
		<ul class="text-sm space-y-sm text-sagedark-11">
			{#each pages as page}
				{#if page.isDivider}
					<li class="my-2 border-t border-sagedark-7"></li>
				{:else}
					<li>
						<a
							href={page.route}
							class='relative flex items-center space-x-sm px-lg py-sm hover:bg-sagedark-4 active:bg-sagedark-5 transition-colors duration-100 rounded-sm {page.route == currentPage && 'bg-sagedark-5 text-sagedark-12'}'
						>
							<svelte:component this={page.icon} class="w-4 h-4" />
							<span>{page.page}</span>
                            {#if page.route == currentPage}
                                <div class="absolute right-0 top-0 h-full w-xs rounded-r-md bg-teal-9">

                                </div>
                            {/if}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>

	<div class="text-sm py-md px-lg bg-sagedark-4 mt-auto">
		<p class="mb-sm text-sage-11">Logged in as {user}</p>
		<button
			class="text-teal-9 font-medium flex items-center space-x-xs hover:text-teal-10 active:text-teal-11 transition-colors duration-100"
			><IconLogout />
			<p>Sign Out</p></button
		>
	</div>
</aside>
