<script lang="ts">
	interface Props {
		label: string;
		value: string | undefined;
		options: { key: string; value: string }[];
	}

	let { label, options, value = $bindable(undefined) }: Props = $props();
	let id = $derived(label.toLowerCase().replaceAll(' ', '-'));
</script>

<div class="mb-5 flex flex-col">
	<label class="mb-1 text-sm" for={id}>{label}</label>
	<ul
		class="w-full items-center overflow-hidden rounded-md border-1 border-gray-300 bg-white text-base sm:flex"
	>
		{#each options as option}
			<li class=" w-full">
				<div class="flex items-center">
					<input
						id={`${id}-${option.key}`}
						bind:group={value}
						type="radio"
						value={option.key}
						name={id}
						class="peer hidden"
					/>
					<label
						for={`${id}-${option.key}`}
						class="w-full cursor-pointer border-r border-gray-200 py-2 text-center text-sm font-medium text-gray-900 peer-checked:bg-yellow-600 peer-checked:text-yellow-50"
						>{option.value}
					</label>
				</div>
			</li>
		{/each}
	</ul>
</div>
