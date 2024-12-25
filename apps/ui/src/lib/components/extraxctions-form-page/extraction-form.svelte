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

	interface Props {
		beanId: number;
		extraction?: Extraction;
	}

	let { extraction, beanId }: Props = $props();

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
	<InputNumeric label={$t('extraction.in')} bind:value={coffeeIn} step={0.1}></InputNumeric>
	<InputNumeric label={$t('extraction.out')} bind:value={coffeeOut} step={0.1}></InputNumeric>
	<InputNumeric label={$t('extraction.time')} bind:value={time}></InputNumeric>
	<InputTextual label={$t('extraction.barista')} bind:value={barista}></InputTextual>
	<InputTextual label={$t('extraction.profile')} bind:value={profile}></InputTextual>
	<InputTextual label={$t('extraction.flow')} bind:value={flow}></InputTextual>
	<InputTextual label={$t('extraction.nextExtractionHint')} bind:value={nextExtractionHint}
	></InputTextual>
	<Button type="submit" label="Speichern"></Button>
</form>
