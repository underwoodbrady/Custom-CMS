<script>
	import Dashboard from "$lib/components/layout/Dashboard.svelte";
	import IconLock from '~icons/mdi/lock';
	import Input from '$lib/components/shared/Input.svelte';
	import InputLong from '$lib/components/shared/InputLong.svelte';
    

</script>
<Dashboard title="Email">
	<div class="flex items-center space-x-sm mb-sm">
		<h2 class="font-medium">Site Email</h2>
		<IconLock class="text-sm text-sagedark-9" />
	</div>
	<div class="mb-lg w-80">
		<Input placeholder="info@spruceseasonalstaging.com" disabled />
	</div>
	<p class="mb-md font-medium">Mailing List</p>

	<p class="mb-md font-medium">Consultation Requests</p>

</Dashboard>