<script lang="ts">
	import BeanForm from '$lib/components/beans-form-page/bean-form.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<h1>Neue Bohne</h1>
<BeanForm></BeanForm>
