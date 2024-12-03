<script lang="ts">
	import { page } from '$app/stores';

	$: currentPage = $page.url.pathname;

	let pages = [
		{
			page: 'Branding',
			route: '/dashboard/branding',
			icon: ''
		},
		{
			page: 'Site Content',
			route: '/dashboard/sitecontent',
			icon: ''
		},
		{
			isDivider: true
		},
		{
			page: 'Analytics',
			route: '/dashboard/analytics',
			icon: ''
		},
		{
			page: 'SEO',
			route: '/dashboard/seo',
			icon: ''
		},
		{
			isDivider: true
		},
		{
			page: 'Blog',
			route: '/dashboard/blog',
			icon: ''
		},
		{
			page: 'Gallery Upload',
			route: '/dashboard/galleryupload',
			icon: ''
		},
		{
			page: 'Email',
			route: '/dashboard/email',
			icon: ''
		},
		{
			isDivider: true
		},
		{
			page: 'Help & Support',
			route: '/support',
			icon: ''
		}
	];
</script>

<aside class="h-screen w-96">
	<ul>
		{#each pages as page}
			{#if page.isDivider}
				<li>DIVIDER</li>
			{:else}
				<li>
					{page.page}
				</li>
			{/if}
		{/each}
	</ul>
</aside>
