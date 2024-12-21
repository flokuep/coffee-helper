<script lang="ts">
	import BeanForm from '$lib/components/beans-form-page/bean-form.svelte';

	let { data } = $props();
</script>

<BeanForm bean={data.bean} />
