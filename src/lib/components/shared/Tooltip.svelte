<script lang="ts">
	export let description: string;
	let isHovered = false;
	let x: number;
	let y: number;

	function mouseOver(e: { pageX: number; pageY: number }) {
		isHovered = true;
		x = e.pageX + 5;
		y = e.pageY + 5;
	}
	function mouseMove(e: { pageX: number; pageY: number }) {
		x = e.pageX + 5;
		y = e.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" class="tooltip col-3-lg col-4-md">{description}</div>
{/if}

<style>
	.tooltip {
		box-shadow: 1px 1px 20px var(--grey);
		background: white;
		padding: var(--base-padding);
		position: absolute;
	}
</style>
