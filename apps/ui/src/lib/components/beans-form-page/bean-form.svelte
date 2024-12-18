<script lang="ts">
	import type { Bean } from '../../../generated/fetch-client';

	interface Props {
		bean?: Bean;
	}

	let { bean = $bindable() }: Props = $props();

	let name = $state(bean ? bean.name : '');
	let manufacturer = $state(bean ? bean.manufacturer : '');
	let profile = $state(bean ? bean.profile : '');
	let notes = $state(bean ? bean.notes : '');
</script>

<form>
	<div>
		<label for="name">Name</label>
		<input id="name" type="text" bind:value={name} />
	</div>
</form>
