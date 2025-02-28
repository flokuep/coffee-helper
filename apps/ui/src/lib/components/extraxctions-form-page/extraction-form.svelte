<script lang="ts">
	import Button from '../generic/button.svelte';
	import InputTextual from '../generic/input-textual.svelte';
	import { t } from '$lib/i18n';
	import {
		extractionControllerCreate,
		extractionControllerUpdate,
		type Extraction
	} from '../../../generated/fetch-client';
	import InputNumeric from '../generic/input-numeric.svelte';
	import InputRadio from '../generic/input-radio.svelte';

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
	}
</script>

<form onsubmit={onSave}>
	<InputNumeric label={$t('extraction.grind')} bind:value={grind} step={0.5}></InputNumeric>
	<InputNumeric label={$t('extraction.in')} bind:value={coffeeIn} step={0.1}></InputNumeric>
	<InputNumeric label={$t('extraction.out')} bind:value={coffeeOut} step={0.1}></InputNumeric>
	<InputNumeric label={$t('extraction.time')} bind:value={time} step={0.1}></InputNumeric>
	<InputTextual label={$t('extraction.barista')} bind:value={barista}></InputTextual>
	<InputRadio
		label={$t('extraction.profile')}
		bind:value={profile}
		options={[
			{ key: 'very_sour', value: 'very sour' },
			{ key: 'sour', value: 'sour' },
			{ key: 'perfect', value: 'perfect' },
			{ key: 'bitter', value: 'bitter' },
			{ key: 'very_bitter', value: 'very bitter' }
		]}
	></InputRadio>
	<InputRadio
		label={$t('extraction.flow')}
		bind:value={flow}
		options={[
			{ key: 'very_slow', value: 'very slow' },
			{ key: 'slow', value: 'slow' },
			{ key: 'perfect', value: 'perfect' },
			{ key: 'fast', value: 'fast' },
			{ key: 'very_fast', value: 'very fast' }
		]}
	></InputRadio>
	<InputTextual label={$t('extraction.nextExtractionHint')} bind:value={nextExtractionHint}
	></InputTextual>
	<Button type="submit" description="Speichert das Formular" label="Speichern"></Button>
</form>
