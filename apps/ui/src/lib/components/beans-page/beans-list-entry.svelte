<script lang="ts">
	import type { Bean } from '../../../generated/fetch-client';

	interface Props {
		bean: Bean;
	}

	let { bean }: Props = $props();
</script>

<li class="my-2 rounded-xl border-1 border-stone-300 bg-stone-50 p-5">
	<a href="/beans/{bean.id}">
		{bean.name} - {bean.manufacturer}<br />
		{bean.profile}
	</a>
</li>
