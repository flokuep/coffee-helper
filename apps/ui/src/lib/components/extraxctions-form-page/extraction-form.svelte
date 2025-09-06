<script lang="ts">
	import Button from '../generic/button.svelte';
	import InputTextual from '../generic/input-textual.svelte';
	import { t } from '$lib/utils/i18n';
	import {
		extractionControllerCreate,
		extractionControllerUpdate,
		type Extraction
	} from '../../../generated/fetch-client';
	import InputNumeric from '../generic/input-numeric.svelte';
	import InputRadio from '../generic/input-radio.svelte';
	import { goto } from '$app/navigation';

	interface Props {
		beanId: number;
		extraction?: Extraction;
	}

	let { extraction, beanId }: Props = $props();

	let grind = $state(extraction ? extraction.grind : undefined);
	let coffeeIn = $state(extraction ? extraction.in : undefined);
	let coffeeOut = $state(extraction ? extraction.out : undefined);
	let time = $state(extraction ? extraction.time : undefined);
	let barista = $state(extraction ? extraction.barista : undefined);
	let flow = $state(extraction ? extraction.flow : undefined);
	let profile = $state(extraction ? extraction.profile : undefined);
	let nextExtractionHint = $state(extraction ? extraction.nextExtractionHint : undefined);

	async function onSave() {
		if (extraction) {
			await extractionControllerUpdate({
				id: extraction.id,
				updateExtractionDto: {
					grind,
					in: coffeeIn,
					out: coffeeOut,
					time,
					barista,
					flow,
					profile,
					nextExtractionHint
				}
			});
		} else {
			await extractionControllerCreate({
				createExtractionDto: {
					grind,
					in: coffeeIn,
					out: coffeeOut,
					time,
					barista,
					flow,
					profile,
					nextExtractionHint
				},
				beanId
			});
		}
		goto(`/beans/${beanId}`);
	}
</script>

<form onsubmit={onSave}>
	<InputNumeric label={$t('extractions.grind')} bind:value={grind} step={0.5}></InputNumeric>
	<InputNumeric label={$t('extractions.in')} bind:value={coffeeIn} step={0.1}></InputNumeric>
	<InputNumeric label={$t('extractions.out')} bind:value={coffeeOut} step={0.1}></InputNumeric>
	<InputNumeric label={$t('extractions.time')} bind:value={time} step={0.1}></InputNumeric>
	<InputTextual label={$t('extractions.barista')} bind:value={barista}></InputTextual>
	<InputRadio
		label={$t('extractions.profile')}
		bind:value={profile}
		translationPrefix="extractions.profileValues"
		options={['very_sour', 'sour', 'perfect', 'bitter', 'very_bitter']}
	></InputRadio>
	<InputRadio
		label={$t('extractions.flow')}
		bind:value={flow}
		translationPrefix="extractions.flowValues"
		options={['very_slow', 'slow', 'perfect', 'fast', 'very_fast']}
	></InputRadio>
	<InputTextual label={$t('extractions.nextExtractionHint')} bind:value={nextExtractionHint}
	></InputTextual>
	<Button type="submit" description={$t('generic.saveForm')} label={$t('generic.save')}></Button>
</form>
