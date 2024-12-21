<script lang="ts">
	import type { Bean } from '../../../generated/fetch-client';
	import BeansListEntry from './beans-list-entry.svelte';

	interface Props {
		beans: Bean[];
	}

	let { beans }: Props = $props();
</script>

<ul>
	{#each beans as bean (bean.id)}
		<BeansListEntry {bean} />
	{/each}
</ul>
