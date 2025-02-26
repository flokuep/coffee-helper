<script lang="ts">
	interface Props {
		description: string;
		label: string;
		type?: 'button' | 'link' | 'submit';
		onclick?: () => void;
		href?: string;
	}

	let {
		description,
		label,
		type = 'button',
		onclick = undefined,
		href = undefined
	}: Props = $props();
</script>

{#if type && type === 'link'}
	<a {href} aria-label={description}>{label}</a>
{:else}
	<button {onclick} {type} aria-label={description} aria-roledescription={type}>{label}</button>
{/if}
