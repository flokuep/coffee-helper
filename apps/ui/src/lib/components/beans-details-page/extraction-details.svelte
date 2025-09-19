<script lang="ts">
	import { t } from '$lib/utils/i18n';
	import Time from 'svelte-time/Time.svelte';
	import type { Extraction } from '../../../generated/fetch-client';
	import { Settings, Scale, Coffee, Watch, Droplets, MessageCircleQuestion } from '@lucide/svelte';
	import Hint from '../generic/hint.svelte';

	interface Props {
		extraction: Extraction;
	}

	let { extraction }: Props = $props();
</script>

<h1 class="mt-5 mb-1 border-b-1 border-yellow-600">
	{$t('extractions.last')}
	<Time relative timestamp={extraction.createdAt}></Time>
</h1>
<div class="grid grid-cols-2 pt-2 md:grid-cols-[1fr_auto_auto_1fr]">
	<div class="my-2 flex items-center justify-center p-1 md:col-start-2 md:p-5">
		<Settings size={64} strokeWidth={1} class="me-1" />
		<span class="text-2xl">{extraction.grind}</span>
	</div>

	<div
		class="my-2 flex items-center justify-center border-yellow-600 p-1 md:col-start-3 md:border-l-1 md:p-5"
	>
		<Scale size={64} strokeWidth={1} class="me-2" />
		<span class="text-2xl">{extraction.in}g</span>
	</div>

	<div class="col-span-2 my-4 border-b-1 border-yellow-600 md:col-start-2"></div>

	<div class="my-2 flex items-center justify-center p-1 md:col-start-2 md:p-5">
		<Watch size={64} strokeWidth={1} />
		<span class="text-2xl">{extraction.time}s</span>
	</div>

	<div
		class="my-2 flex items-center justify-center p-1 md:col-start-3 md:border-l-1 md:border-yellow-600 md:p-5"
	>
		<Coffee size={64} strokeWidth={1} class="me-2" />
		<span class="text-2xl">{extraction.out}g</span>
	</div>

	<div class="col-span-2 my-4 border-b-1 border-yellow-600 md:col-start-2"></div>

	<div class="my-2 flex items-center justify-center p-1 md:col-start-2 md:p-5">
		<Droplets size={64} strokeWidth={1} class="me-1" />
		<span class="text-2xl">{$t(`extractions.flowValues.${extraction.flow}`)}</span>
	</div>

	<div
		class="my-2 flex items-center justify-center p-1 md:col-start-3 md:border-l-1 md:border-yellow-600 md:p-5"
	>
		<MessageCircleQuestion size={64} strokeWidth={1} class="me-1" />
		<span class="text-2xl">{$t(`extractions.profileValues.${extraction.profile}`)}</span>
	</div>

	{#if extraction.nextExtractionHint}
		<div class="col-span-2 my-4 border-b-1 border-yellow-600 md:col-start-2"></div>
		<Hint>
			{extraction.nextExtractionHint}
		</Hint>
	{/if}
</div>
