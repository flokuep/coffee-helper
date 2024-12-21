<script lang="ts">
	interface Props {
		label: string;
		value: string;
		type?: string;
	}

	let { label, type = 'text', value = $bindable('') }: Props = $props();
	let id = $derived(label.toLowerCase().replaceAll(' ', '-'));
</script>

<div>
	<label for={id}>{label}</label>
	<input {id} {type} bind:value />
</div>
