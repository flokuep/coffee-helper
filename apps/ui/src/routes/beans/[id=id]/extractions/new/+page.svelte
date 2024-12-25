<script lang="ts">
	import ExtractionForm from '$lib/components/extraxctions-form-page/extraction-form.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<h1>Extraktion hinzufügen</h1>
<ExtractionForm beanId={data.beanId}></ExtractionForm>
