<script lang="ts">
	export let description: string;
	let hover = false;
	let x: number;
	let y: number;

	function mouseOver(e: { pageX: number; pageY: number }) {
		hover = true;
		x = e.pageX + 10;
		y = e.pageY + 10;
	}
	function mouseMove(e: { pageX: number; pageY: number }) {
		x = e.pageX + 10;
		y = e.pageY + 10;
	}
	function mouseLeave() {
		hover = false;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>
	<slot />
</div>

{#if hover}
	<div style="top: {y}px; left: {x}px;" class="tooltip col-3-lg col-4-md">{description}</div>
{/if}

<style>
	.tooltip {
		box-shadow: 1px 1px 20px var(--grey);
		background: var(--secondary);
		padding: var(--base-padding);
		position: absolute;
		max-width: 500px;
	}
</style>
