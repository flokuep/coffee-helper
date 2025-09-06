<script lang="ts">
	import { t } from '$lib/utils/i18n';
	import Chip from '../generic/chip.svelte';

	interface Props {
		value: string | undefined;
		decaf: boolean;
	}

	let { value = $bindable(undefined), decaf = $bindable(false) }: Props = $props();
</script>

<div class="my-2 flex">
	<input
		class="me-4 grow border-b-1 border-gray-300 px-3 py-1.5 text-base focus:border-yellow-600 focus:outline-0"
		id="filter"
		type="text"
		bind:value
		placeholder={$t('generic.filter')}
	/>
	<Chip bind:active={decaf} label={$t('beans.decaf')}></Chip>
</div>
