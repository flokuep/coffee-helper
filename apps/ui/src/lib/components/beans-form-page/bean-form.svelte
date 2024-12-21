<script lang="ts">
	import {
		beanControllerCreate,
		beanControllerUpdate,
		type Bean
	} from '../../../generated/fetch-client';
	import Button from '../generic/button.svelte';
	import InputTextual from '../generic/input-textual.svelte';

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
			await beanControllerCreate({ createBeanDto: { name, manufacturer, profile, notes } });
		}
	}
</script>

<form onsubmit={onSave}>
	<InputTextual label="Name" bind:value={name}></InputTextual>
	<InputTextual label="Rösterei" bind:value={manufacturer}></InputTextual>
	<InputTextual label="Profil" bind:value={profile}></InputTextual>
	<InputTextual label="Notizen" bind:value={notes}></InputTextual>
	<Button type="submit" label="Speichern"></Button>
</form>
