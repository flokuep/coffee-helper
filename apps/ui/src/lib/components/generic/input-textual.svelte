<script lang="ts">
	interface Props {
		label: string;
		value: string | undefined;
		type?: string;
	}

	let { label, type = 'text', value = $bindable(undefined) }: Props = $props();
	let id = $derived(label.toLowerCase().replaceAll(' ', '-'));
</script>

<div>
	<label for={id}>{label}</label>
	<input {id} {type} bind:value />
</div>
