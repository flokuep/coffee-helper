<script lang="ts">
	import { t } from '$lib/utils/i18n';

	interface Props {
		label: string;
		value: string | undefined;
		translationPrefix: string;
		options: string[];
	}

	let { label, options, translationPrefix, value = $bindable(undefined) }: Props = $props();
	let id = $derived(label.toLowerCase().replaceAll(' ', '-'));
</script>

<div class="mb-5 flex flex-col">
	<label class="mb-1 text-sm" for={id}>{label}</label>
	<ul
		class="w-full items-center overflow-hidden rounded-md border-1  dark:border-stone-800 border-gray-300 bg-white dark:bg-stone-900 text-base sm:flex"
	>
		{#each options as option}
			<li class=" w-full">
				<div class="flex items-center">
					<input
						id={`${id}-${option}`}
						bind:group={value}
						type="radio"
						value={option}
						name={id}
						class="peer hidden"
					/>
					<label
						for={`${id}-${option}`}
						class="w-full cursor-pointer border-r border-gray-200  dark:border-stone-700 py-2 text-center text-sm font-medium text-gray-900 dark:text-stone-300 peer-checked:bg-yellow-600 dark:peer-checked:bg-amber-600 peer-checked:text-yellow-50 dark:peer-checked:text-stone-50"
						>{$t(`${translationPrefix}.${option}`)}
					</label>
				</div>
			</li>
		{/each}
	</ul>
</div>
