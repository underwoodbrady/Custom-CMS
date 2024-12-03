<script lang="ts">
    import { enhance } from '$app/forms';
	import IconButton from "../shared/IconButton.svelte";
    import IconDiscard from '~icons/mdi/delete-empty-outline';
	import IconSave from '~icons/mdi/content-save';


    export let title:string;
    export let onSave: (() => void) | null = null;
    export let onDiscard: (() => void) | null = null;
    export let changesMade:boolean = true;
    export let changesSubmitted:boolean = false;
</script>

<section class="py-2xl px-xl">
    <h1 class="text-2xl font-medium mb-lg">{title}</h1>
    {#if onSave && onDiscard}
    <form method="post" action="?/dashboardupdate" use:enhance>
        <slot/>
        {#if changesMade}
            <div class="flex items-center space-x-md ">
                <IconButton text="Discard Changes" onclick={onDiscard} secondary>
                    <IconDiscard/>
                </IconButton>
                <IconButton text="Save And Upload" onclick={onSave}>
                    <IconSave/>
                </IconButton>
            </div>
        {/if}
    </form>
    {:else}
        <slot/>
    {/if}
</section>