<script lang="ts">
	import { enhance } from '$app/forms';
	import IconButton from '../shared/IconButton.svelte';
	import IconDiscard from '~icons/mdi/delete-empty-outline';
	import IconSave from '~icons/mdi/content-save';
	import IconInfo from '~icons/mdi/info';

	export let title: string;
	export let subtitle: string | null = null;
	export let onSave: (() => void) | null = null;
	export let onDiscard: (() => void) | null = null;
	export let changesMade: boolean = true;
	export let changesSubmitted: boolean = false;
	export let showSafeEditMode:boolean = true;
</script>

<section class="py-2xl px-xl max-w-screen-xl mx-auto">
	<div class="flex items-center w-full justify-between mb-xl">
		<div>
			<h1 class="text-2xl font-semibold {subtitle && "mb-xs"}">{title}</h1>
			{#if subtitle}
			<h2 class="text-sm text-sagedark-11">Last Updated 12/4/2024</h2>
			{/if}
		</div>
		{#if showSafeEditMode}
		<div
			class="relative text-sagedark-11 hover:text-sagedark-12 flex items-center text-sm space-x-xs group duration-100 transition-colors"
		>
			<IconInfo />
			<p>Safe Edit Mode</p>
			<div
				class="absolute z-10 top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-1 transition-all duration-100 ease-out bg-sagedark-4 text-sagedark-11 rounded-md p-sm text-xs drop-shadow-sm"
			>
				Any Changes Made Will Be Reviewed Within 12 Hours
			</div>
		</div>
		{/if}
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
