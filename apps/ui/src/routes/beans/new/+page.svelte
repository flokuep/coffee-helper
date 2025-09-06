<script lang="ts">
	import BeanForm from '$lib/components/beans-form-page/bean-form.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import { t } from '$lib/i18n';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<AppShell pageTitle={$t('beans.create')}>
	{#snippet header()}
		<AppShellHeader title={$t('beans.create')}></AppShellHeader>
	{/snippet}
	<BeanForm></BeanForm>
</AppShell>
