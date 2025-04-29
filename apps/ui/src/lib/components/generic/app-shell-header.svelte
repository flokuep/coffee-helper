<script lang="ts">
	import { Coffee } from '@lucide/svelte';
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

<header class="flex flex-row border-b-2 border-yellow-600 px-5 pb-2" role="heading" aria-level="0">
	<a href="/beans" aria-label="Start" class="me-2"><Coffee></Coffee></a>
	<h1 class="grow text-xl font-medium">{title}</h1>
	{#if action}
		<Button type="link" description={action.label} label={action.label} href={action.href}></Button>
	{/if}
</header>
