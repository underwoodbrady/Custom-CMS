<script>
	import IconPlus from '~icons/mdi/plus';
	import IconLock from '~icons/mdi/lock';
	import IconEdit from '~icons/mdi/edit-outline';
	import Dashboard from '$lib/components/layout/Dashboard.svelte';
	import Input from '$lib/components/shared/Input.svelte';
	import InputLong from '$lib/components/shared/InputLong.svelte';
</script>

<Dashboard title="Branding" onDiscard={() => {}} onSave={() => {}}>
	<div class="flex space-x-xl mb-lg">
		<div>
			<h2 class="font-medium mb-sm">Logo</h2>
			<div
				class="border border-dashed border-sagedark-7 text-sagedark-7 hover:border-sagedark-8 hover:text-sagedark-8 active:border-sagedark-9 active:text-sagedark-9 rounded-md w-32 h-20 flex items-center justify-center duration-100 transition-colors"
			>
				<IconPlus />
			</div>
		</div>
		<div>
			<h2 class="font-medium mb-sm">Icon</h2>
			<div
				class="border border-dashed border-sagedark-7 text-sagedark-7 hover:border-sagedark-8 hover:text-sagedark-8 active:border-sagedark-9 active:text-sagedark-9 rounded-md w-20 h-20 flex items-center justify-center duration-100 transition-colors"
			>
				<IconPlus />
			</div>
		</div>
	</div>

	<h2 class="font-medium mb-sm">Brand Colors</h2>
	<div class="flex items-center space-x-md mb-lg">
		<div>
			<h3 class="text-sagedark-11 mb-sm text-sm">Primary</h3>
			<button class="relative rounded-md w-9 h-9 bg-[#f7d7] border border-sagedark-7">
				<IconEdit
					class="absolute -bottom-2 -right-2 text-sm bg-teal-9 hover:bg-teal-10 active:bg-teal-11 transition-colors duration-100 rounded-full p-xs text-sagedark-1"
				/>
			</button>
		</div>
		<div>
			<h3 class="text-sagedark-11 mb-sm text-sm">Accent</h3>
			<button class="relative rounded-md w-9 h-9 bg-[#d8d8] border border-sagedark-7">
				<IconEdit
					class="absolute -bottom-2 -right-2 text-sm bg-teal-9 hover:bg-teal-10 active:bg-teal-11 transition-colors duration-100 rounded-full p-xs text-sagedark-1"
				/>
			</button>
		</div>
		<div>
			<h3 class="text-sagedark-11 mb-sm text-sm">Black</h3>
			<div class="relative rounded-md w-9 h-9 bg-[#fff] border border-sagedark-7">
				<IconEdit
					class="absolute -bottom-2 -right-2 text-sm bg-teal-9 hover:bg-teal-10 active:bg-teal-11 transition-colors duration-100 rounded-full p-xs text-sagedark-1"
				/>
			</div>
		</div>
	</div>
	<div class="flex items-center space-x-sm mb-sm">
		<h2 class="font-medium">Site URL</h2>
		<IconLock class="text-sm text-sagedark-9" />
	</div>
	<div class="mb-lg w-80">
		<Input placeholder="spruceseasonalstaging.com" disabled />
	</div>
	<h2 class="font-medium mb-sm">Site Title</h2>
    <div class="mb-lg w-80">
		<Input placeholder="Spruce - Seasonal Staging And Decor"/>
	</div>
	<h2 class="font-medium mb-sm">Site Description</h2>
    <div class="mb-lg w-80">
		<InputLong placeholder="Let Spruce take the hassle out of your holiday by handling all of your decorating needs" />
	</div>
	<h2 class="font-medium mb-sm">Site Tags</h2>
    
	<h2 class="font-medium mb-sm">Social Media Links</h2>
</Dashboard>
