<script lang="ts">
	import IconLoading from '~icons/mdi/loading';


	export let text: string;
	export let onclick: () => void;
	export let secondary: boolean = false;
	export let loading: boolean = false;
</script>

<button
	class="relative text-sm font-medium flex items-center space-x-sm {secondary
		? 'bg-red-9 hover:bg-red-10 active:bg-red-11'
		: 'bg-teal-9 hover:bg-teal-10 active:bg-teal-11'} rounded-md px-md py-sm transition-colors duration-100"
	on:click={onclick}
	disabled={loading}
>
	<slot />
	<p>{text}</p>
	{#if loading}
		<div
			class="absolute -left-2 top-0 w-full h-full {secondary
				? 'bg-red-9 '
				: 'bg-teal-9 '} rounded-md flex items-center justify-center"
		>
        <IconLoading class="animate-spin"/>
    </div>
	{/if}
</button>
