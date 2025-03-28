<script lang="ts">
	import type { Bean } from '../../../generated/fetch-client';

	interface Props {
		bean: Bean;
	}

	let { bean }: Props = $props();

	let extraction = $derived(
		bean.extractions.toSorted((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)).at(0)
	);
</script>

<li class="my-2 rounded-xl border-1 border-stone-300 bg-stone-50 p-5">
	<a href="/beans/{bean.id}">
		{bean.name}, {bean.manufacturer}<br />
		{#if extraction}
			{#if extraction.flow !== 'perfect' || extraction.profile !== 'perfect'}
				(!)
			{/if}
			{extraction.in}g &middot; {extraction.grind} &middot; {extraction.out}g &middot; {extraction.time}s
		{/if}
	</a>
</li>
