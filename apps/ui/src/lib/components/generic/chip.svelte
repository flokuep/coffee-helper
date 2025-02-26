<script lang="ts">
	interface Props {
		label: string;
		active: boolean;
	}

	let { active = $bindable(false), label }: Props = $props();
</script>

<button
	class="cursor-pointer rounded-lg border-1 px-1 {active
		? 'border-gray-800 bg-gray-800 text-gray-300'
		: 'border-gray-300 bg-gray-300 text-gray-800'}"
	onclick={() => (active = !active)}
>
	{label}
</button>
