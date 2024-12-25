<script lang="ts">
	interface Props {
		label: string;
		value: number | undefined;
		step?: number | undefined;
		min?: number | undefined;
		max?: number | undefined;
	}

	let { label, step, min, max, value = $bindable(undefined) }: Props = $props();
	let id = $derived(label.toLowerCase().replaceAll(' ', '-'));
</script>

<div>
	<label for={id}>{label}</label>
	<input {id} type="number" {step} {min} {max} bind:value />
</div>
