<script lang="ts">
	interface Props {
		label: string;
		type?: 'button' | 'link' | 'submit';
		onclick?: () => void;
		href?: string;
	}

	let { label, type = 'button', onclick = undefined, href = undefined }: Props = $props();
</script>

{#if type && type === 'link'}
	<a {href}>{label}</a>
{:else}
	<button {onclick} {type} aria-label={label} aria-roledescription={type}>{label}</button>
{/if}
