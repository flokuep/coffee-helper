<script lang="ts">
	import BeansList from '$lib/components/beans-page/beans-list.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<h1>Alle Bohnen</h1>
<p>Übersicht über alle Bohnen.</p>
<BeansList beans={data.beans} />
