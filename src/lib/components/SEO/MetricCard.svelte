<script lang="ts">
	import IconInfo from '~icons/mdi/information-outline';

    export let title:string;
    export let time:string;
</script>

<div class="relative flex space-x-sm bg-sagedark-3 p-md rounded-md">
	<div class="w-3 h-3 rounded-full bg-tealdark-9 mt-xs"></div>
	<div>
		<h4 class="mb-sm">{title}</h4>
		<p class="text-2xl text-tealdark-9 font-medium">{time}</p>
	</div>
	<div class="absolute right-sm bottom-sm group">
		<IconInfo
			class="text-sagedark-9 hover:text-sagedark-10 active:text-sagedark-11 duration-100 transition-colors text-sm"
		/>
		<div
			class="absolute z-10 left-0 top-full w-44 invisible opacity-0 group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-1 transition-all duration-100 ease-out bg-sagedark-5 text-sagedark-11 rounded-md p-sm text-xs drop-shadow-sm"
		>
		<slot/>
		</div>
	</div>
</div>
