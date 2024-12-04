<script>
	import PagesSidebar from "$lib/components/layout/PagesSidebar.svelte";
    import { page } from '$app/stores';
	$: currentPage = $page.url.pathname;


</script>
<div class="flex">
	<PagesSidebar {currentPage}/>
	<div class="flex-1 ml-52">
		<slot/>
	</div>

</div>