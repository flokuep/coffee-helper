<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }
    const { children }: Props = $props();
</script>
        
        <div
			class="bg-stone-5 col-span-2 my-2 flex items-center justify-center rounded-xl border-1 dark:bg-red-600 dark:text-red-100 dark:border-red-700 border-red-300 bg-red-50 p-5 md:col-start-2 md:p-5"
		>
            {@render children?.()}
		</div>