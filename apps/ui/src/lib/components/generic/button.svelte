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
	<button
		class="my-1 w-full cursor-pointer rounded-md bg-yellow-600 px-2 py-2 text-sm text-yellow-50 hover:bg-yellow-900 hover:text-stone-200"
		{onclick}
		{type}
		aria-label={description}
		aria-roledescription={type}>{label}</button
	>
{/if}
