<script lang="ts">
	import ScrollButton from '$shared/ScrollButton.svelte';
	import DarkSwitch from '$shared/DarkSwitch.svelte';
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
	<div class="mode">
		<DarkSwitch />
	</div>
	<div class="scrolling">
		<ScrollButton />
	</div>
</div>

<style>
	:global(.dark) {
		background: var(--primary);
		color: white;
	}

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

	.mode,
	.scrolling {
		position: absolute;
		bottom: 5%;
	}

	.mode {
		left: 2%;
	}

	.scrolling {
		right: 2%;
	}
	@media (max-width: 1024px) {
		main {
			flex-wrap: wrap;
			flex-direction: column;
			overflow-x: hidden;
			height: auto;
		}
		.mode,
		.scrolling {
			display: none;
		}
	}
</style>
