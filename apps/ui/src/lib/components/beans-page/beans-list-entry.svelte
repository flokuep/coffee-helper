<script lang="ts">
	import { Coffee, Scale, Settings, ShieldAlert, Watch } from '@lucide/svelte';
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
		<div>{bean.name}, {bean.manufacturer}</div>
		{#if extraction}
			<div class="flex flex-row items-center">
				{#if extraction.flow !== 'perfect' || extraction.profile !== 'perfect'}
					<ShieldAlert size={20} strokeWidth={2} fill="oklch(80.8% 0.114 19.571)" class="me-4" />
				{/if}
				<Scale size={20} strokeWidth={1} class="me-1" />{extraction.in}g
				<Settings size={20} strokeWidth={1} class="ms-4 me-1" />{extraction.grind}
				<Coffee size={20} strokeWidth={1} class="ms-4 me-1" />{extraction.out}g
				<Watch size={20} strokeWidth={1} class="ms-3 me-0.5" />{extraction.time}s
			</div>
		{/if}
	</a>
</li>
