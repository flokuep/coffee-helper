<script lang="ts">
	import type { Bean } from '../../../generated/fetch-client';

	interface Props {
		bean: Bean;
	}

	let { bean = $bindable() }: Props = $props();
</script>

<li>
	<a href="/beans/{bean.id}">
		{bean.name} - {bean.manufacturer}<br />
		{bean.profile}
	</a>
</li>
