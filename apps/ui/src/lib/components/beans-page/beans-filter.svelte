<script lang="ts">
	import { t } from '$lib/i18n';
	import Chip from '../generic/chip.svelte';

	interface Props {
		value: string | undefined;
		decaf: boolean;
	}

	let { value = $bindable(undefined), decaf = $bindable(false) }: Props = $props();
</script>

<div class="flex">
	<input
		class="mr-2 grow border-b-1 border-gray-300"
		id="filter"
		type="text"
		bind:value
		placeholder={$t('generic.filter')}
	/>
	<Chip bind:active={decaf} label={$t('beans.decaf')}></Chip>
</div>
