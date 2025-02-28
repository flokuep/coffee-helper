<script lang="ts">
	import {
		beanControllerCreate,
		beanControllerUpdate,
		type Bean
	} from '../../../generated/fetch-client';
	import Button from '../generic/button.svelte';
	import InputTextual from '../generic/input-textual.svelte';
	import { t } from '$lib/i18n';

	interface Props {
		bean?: Bean;
	}

	let { bean }: Props = $props();

	let name = $state(bean ? bean.name : '');
	let manufacturer = $state(bean ? bean.manufacturer : '');
	let profile = $state(bean && bean.profile ? bean.profile : '');
	let notes = $state(bean && bean.notes ? bean.notes : '');

	async function onSave() {
		if (bean) {
			await beanControllerUpdate({
				id: bean.id,
				updateBeanDto: { name, manufacturer, profile, notes }
			});
		} else {
			await beanControllerCreate({
				createBeanDto: { name, manufacturer, profile, notes, decaf: false }
			});
		}
	}
</script>

<form onsubmit={onSave}>
	<InputTextual label={$t('beans.bean')} bind:value={name}></InputTextual>
	<InputTextual label={$t('beans.manufacturer')} bind:value={manufacturer}></InputTextual>
	<InputTextual label={$t('beans.profile')} bind:value={profile}></InputTextual>
	<InputTextual label={$t('beans.notes')} bind:value={notes}></InputTextual>
	<Button type="submit" description={$t('generic.saveForm')} label={$t('generic.save')}></Button>
</form>
