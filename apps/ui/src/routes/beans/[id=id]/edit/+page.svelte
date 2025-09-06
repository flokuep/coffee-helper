<script lang="ts">
	import BeanForm from '$lib/components/beans-form-page/bean-form.svelte';
	import AppShellHeader from '$lib/components/generic/app-shell-header.svelte';
	import AppShell from '$lib/components/generic/app-shell.svelte';
	import { t } from '$lib/utils/i18n.js';

	let { data } = $props();
</script>

<AppShell pageTitle={$t('beans.edit')}>
	{#snippet header()}
		<AppShellHeader title={$t('beans.edit')}></AppShellHeader>
	{/snippet}
	<BeanForm bean={data.bean} />
</AppShell>
