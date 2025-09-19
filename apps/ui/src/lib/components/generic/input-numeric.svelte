<script lang="ts">
	interface Props {
		label: string;
		value: number | undefined;
		step?: number | undefined;
		min?: number | undefined;
		max?: number | undefined;
		placeholder?: string | undefined;
	}

	let { label, step, min, max, placeholder, value = $bindable(undefined) }: Props = $props();
	let id = $derived(label.toLowerCase().replaceAll(' ', '-'));
</script>

<div class="mb-5 flex flex-col">
	<label class="mb-1 text-sm" for={id}>{label}</label>
	<input
		class="rounded-md border-1 border-gray-300 dark:border-stone-800 px-3 py-1.5 text-base focus:outline-1 focus:outline-yellow-600"
		{id}
		type="number"
		{step}
		{min}
		{max}
		{placeholder}
		bind:value
	/>
</div>
