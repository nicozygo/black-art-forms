<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	let src: string;
	let className: string;
	export { className as class };
	export let url: string;
	export let alt: string = '';
	export let width: string = '100%';
	export let height: string = '100%';

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
	<img {src} {alt} {width} {height} class={className || ''} />
{:else}
	<Spinner />
{/if}
