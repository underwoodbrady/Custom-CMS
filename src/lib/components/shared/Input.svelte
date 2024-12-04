<script lang="ts">
	export let name: string = '';
	export let placeholder: string = '';
	export let required: boolean = false;
    export let disabled:boolean = false;
</script>

<input {name} {placeholder} {required} {disabled}
	class="w-full bg-sagedark-1 border border-sagedark-7 {disabled ? "text-sagedark-9 placeholder:text-sagedark-9" : "text-sagedark-12 placeholder:text-sagedark-11"} rounded-md px-md py-sm transition-colors duration-100"
/>
