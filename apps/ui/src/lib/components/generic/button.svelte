<script lang="ts">
	interface Props {
		label: string;
		type?: 'button' | 'submit';
		onclick?: () => void;
	}

	let { label, type = 'button', onclick = undefined }: Props = $props();
</script>

<button {onclick} {type} aria-label={label} aria-roledescription={type}>{label}</button>
