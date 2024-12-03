<script>
    	import IconPlus from '~icons/mdi/plus';
    	import IconLock from '~icons/mdi/lock';
	import Dashboard from '$lib/components/layout/Dashboard.svelte';
</script>

<Dashboard title="Branding" onDiscard={() => {}} onSave={() => {}}>
	<div class="flex space-x-xl mb-lg">
		<div>
			<h2 class="font-medium mb-sm">Logo</h2>
            <div class="border border-dashed border-sagedark-7 text-sagedark-7 hover:border-sagedark-8 hover:text-sagedark-8 active:border-sagedark-9 active:text-sagedark-9 rounded-md w-32 h-20 flex items-center justify-center duration-100 transition-colors">
                <IconPlus/>
            </div>
		</div>
		<div>
			<h2 class="font-medium mb-sm">Icon</h2>
            <div class="border border-dashed border-sagedark-7 text-sagedark-7 hover:border-sagedark-8 hover:text-sagedark-8 active:border-sagedark-9 active:text-sagedark-9  rounded-md w-20 h-20 flex items-center justify-center duration-100 transition-colors">
                <IconPlus/>
            </div>
		</div>
	</div>

	<h2 class="font-medium mb-sm">Brand Colors</h2>
	<div class="flex items-center space-x-md mb-lg">
        <div>
            <h3 class="text-sagedark-11 mb-sm">Primary</h3>
            <div class="rounded-md w-9 h-9 bg-[#f7d7]">

            </div>
        </div>
        <div>
            <h3 class="text-sagedark-11 mb-sm">Secondary</h3>
            <div class="rounded-md w-9 h-9 bg-[#d8d8]">

            </div>
        </div>
        <div>
            <h3 class="text-sagedark-11 mb-sm">Black</h3>
            <div class="rounded-md w-9 h-9 bg-[#fff]">

            </div>
        </div>
	</div>
    <div>

        <h2 class="font-medium mb-sm">Site URL</h2>
        <IconLock/>
    </div>
	<h2 class="font-medium mb-sm">Site Title</h2>
	<h2 class="font-medium mb-sm">Site Description</h2>
	<h2 class="font-medium mb-sm">Site Tags</h2>
	<h2 class="font-medium mb-sm">Social Media Links</h2>
</Dashboard>
