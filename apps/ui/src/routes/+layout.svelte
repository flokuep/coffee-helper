<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="col-start-2 p-5">
	{@render children()}
</main>
<footer class="col-start-2 max-h-80 p-5">Some footer</footer>
