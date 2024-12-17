<script lang="ts">
	import type { Bean } from '../../../generated/fetch-client';

	interface Props {
		beans: Bean[];
	}

	let { beans = $bindable([]) }: Props = $props();
</script>

{JSON.stringify(beans)}
