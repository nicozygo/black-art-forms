<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	let src: string;
	export let url: string;
	export let alt: string = '';
	export let width: string = '100%';
	export let height: string = '100%';
	export let style: string = '';

	onMount(async () => {
		const res = await fetch(url);
		src = await res.url;
	});

	onDestroy(() => {
		src = '';
		url = '';
	});
</script>

{#if src}
	<img {src} {alt} {width} {height} {style} />
{/if}
