<script lang="ts">
	interface Props {
		label: string;
		active: boolean;
	}

	let { active = $bindable(false), label }: Props = $props();
</script>

<button
	class="my-1 cursor-pointer rounded-2xl px-2 text-sm {active
		? 'bg-yellow-900 text-stone-200'
		: 'bg-yellow-600 text-yellow-50'}"
	onclick={() => (active = !active)}
>
	{label}
</button>
