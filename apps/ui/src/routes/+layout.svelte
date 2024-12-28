<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>
<footer>Some footer</footer>
