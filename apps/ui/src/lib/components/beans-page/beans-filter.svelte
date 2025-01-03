<script lang="ts">
	import InputTextual from '../generic/input-textual.svelte';

	interface Props {
		value: string | undefined;
	}

	let { value = $bindable(undefined) }: Props = $props();
</script>

<input id="filter" type="text" bind:value placeholder="Filter..." />
