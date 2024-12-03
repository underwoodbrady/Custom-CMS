<script>
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import { page } from '$app/stores';

	$: currentPage = $page.url.pathname;

	const appName = "CMS";

    $: title = [appName, ...currentPage.split("/").slice(2)].join(" - ");
</script>

<div class="flex">
	<Sidebar {currentPage}/>
	<main class="flex-1">
		<slot />
	</main>
</div>

<svelte:head>
    <title>{title}</title>
</svelte:head>