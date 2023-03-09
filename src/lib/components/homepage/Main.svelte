<script lang="ts">
	import ScrollButton from '$shared/ScrollButton.svelte';

	export let width: number;
	let main: HTMLElement | null;

	export function scroll(e: { deltaY: number }) {
		if (main && width > 1024) {
			main.scrollLeft += e.deltaY;
		}
	}
</script>

<!-- toggle overdlow hidden for large screens when scrolling horizontally -->
<svelte:head>
	{#if width > 1024}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<main bind:this={main} on:wheel={scroll}>
	<slot />
</main>
<div class="row">
	<div class="scrolling">
		<ScrollButton />
	</div>
</div>

<style>
	main {
		padding: 0;
		height: 95vh;
		display: flex;
		flex-wrap: nowrap;
		overflow-x: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		overflow-y: hidden;
	}
	main::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 1024px) {
		main {
			flex-wrap: wrap;
			flex-direction: column;
			overflow-x: hidden;
			height: auto;
		}
	}
	.scrolling {
		position: absolute;
		bottom: 5%;
		right: 2%;
	}
	@media (max-width: 1024px) {
		.scrolling {
			display: none;
		}
	}
</style>
