<script lang="ts">
	import { chartRender } from '$lib/actions/chartRenderer';

	export let data: any;
    export let label: string;
    export let score: string;
</script>

<div class="flex flex-col items-center">
	<div class="relative w-16 h-16 mb-sm">
		<div
			class="absolute left-0 top-0 w-[calc(100%-14px)] h-[calc(100%-14px)] bg-tealdark-5 rounded-full mt-[10px] ml-[8px] text-tealdark-12 flex items-center justify-center font-medium text-xl"
		>
			<p class="mt-xs">{score}</p>
		</div>
		<canvas use:chartRender={data} class="relative z-10"> </canvas>
	</div>
	<p class="text-xs text-sagedark-11">{label}</p>
</div>
