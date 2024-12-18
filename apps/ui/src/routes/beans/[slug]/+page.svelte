<script lang="ts">
	import BeanDetails from '$lib/components/beans-page/bean-details.svelte';

	let { data } = $props();
</script>

<BeanDetails bean={data.bean} />
