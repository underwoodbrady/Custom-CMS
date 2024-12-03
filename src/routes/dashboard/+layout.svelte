<script>
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
</script>

<div class="flex">
	<Sidebar />
	<main class="flex-1">
		<slot />
	</main>
</div>
