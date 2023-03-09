<script lang="ts">
	import Icon from '$lib/components/shared/Icon.svelte';
	const distance = 1000;
	let main: HTMLElement | null;

	export function scrollLeft() {
		main = document.querySelector('main');
		if (!main) return;
		main.scrollBy({
			left: -distance,
			behavior: 'smooth'
		});
	}

	export function scrollRight() {
		main = document.querySelector('main');
		if (!main) return;
		main.scrollBy({
			left: distance,
			behavior: 'smooth'
		});
	}
</script>

<div class="scroll">
	<button on:click|preventDefault={scrollLeft}>
		<Icon name="left" size="32px" />
	</button>
	<span>SCROLL</span>
	<button on:click|preventDefault={scrollRight}>
		<Icon name="right" size="32px" />
	</button>
</div>

<style>
	.scroll {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		display: flex;
		border: 0;
		margin-right: var(--base-margin);
		margin-left: var(--base-margin);
	}

	button:hover {
		fill: var(--hover);
		color: var(--hover);
		scale: 1.1;
	}

	button:active {
		fill: var(--clicked);
		color: var(--clicked);
		scale: 0.95;
	}

	span {
		font-family: var(--heading-font);
		text-transform: uppercase;
		font-weight: 600;
		font-size: 1.5rem;
		padding: var(--base-padding);
	}
</style>
