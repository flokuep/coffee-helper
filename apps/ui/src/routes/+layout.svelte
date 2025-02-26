<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="col-start-2 px-1 py-2 md:p-5">
	{@render children()}
</main>
