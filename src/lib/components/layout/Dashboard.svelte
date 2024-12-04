<script lang="ts">
	import { enhance } from '$app/forms';
	import IconButton from '../shared/IconButton.svelte';
	import IconDiscard from '~icons/mdi/delete-empty-outline';
	import IconSave from '~icons/mdi/content-save';
	import IconInfo from '~icons/mdi/info';

	export let title: string;
	export let onSave: (() => void) | null = null;
	export let onDiscard: (() => void) | null = null;
	export let changesMade: boolean = true;
	export let changesSubmitted: boolean = false;
</script>

<section class="py-2xl px-xl">
	<div class="flex items-center w-full justify-between mb-xl">
		<h1 class="text-2xl font-semibold">{title}</h1>
		<div
			class="relative text-sagedark-11 hover:text-sagedark-12 flex items-center text-sm space-x-xs group duration-100 transition-colors"
		>
			<IconInfo />
			<p>Safe Edit Mode</p>
			<div
				class="absolute top-full left-0 hidden group-hover:block bg-sagedark-4 text-sagedark-11 rounded-md p-sm text-xs"
			>
				Any Changes Made Will Be Reviewed Within 12 Hours
			</div>
		</div>
	</div>
	{#if onSave && onDiscard}
		<form method="post" action="?/dashboardupdate" use:enhance>
			<slot />
			{#if changesMade}
				<div class="flex items-center space-x-md">
					<IconButton text="Discard Changes" onclick={onDiscard} secondary>
						<IconDiscard />
					</IconButton>
					<IconButton text="Save And Upload" onclick={onSave}>
						<IconSave />
					</IconButton>
				</div>
			{/if}
		</form>
	{:else}
		<slot />
	{/if}
</section>
