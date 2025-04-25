<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Extraction } from '../../../generated/fetch-client';

	interface Props {
		extraction: Extraction;
	}

	let { extraction }: Props = $props();
</script>

<tr>
	<td>{extraction.grind}</td>
	<td>{extraction.in}g</td>
	<td>{extraction.time}s</td>
	<td>{extraction.out}g</td>
	<td>{$t(`extractions.flowValues.${extraction.flow}`)}</td>
	<td>{$t(`extractions.profileValues.${extraction.profile}`)}</td>
</tr>
