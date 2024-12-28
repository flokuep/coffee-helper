<script lang="ts">
	import Button from './button.svelte';

	type Props = {
		title: string;
		action?: {
			label: string;
			href: string;
		};
	};

	const { title, action }: Props = $props();
</script>

<h1>{title}</h1>
{#if action}
	<Button type="link" label={action.label} href={action.href}></Button>
{/if}
