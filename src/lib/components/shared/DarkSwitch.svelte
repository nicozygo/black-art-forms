<script lang="ts">
	import Icon from './Icon.svelte';
	let dark = false;
</script>

<button on:click={() => (dark = !dark)} class:active={dark}>
	{#if dark}
		<Icon name="sun" size="50px" />
		<span>Light Mode</span>
	{:else}
		<Icon name="moon" size="50px" />
		<span>Dark Mode</span>
	{/if}
</button>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		border: 0;
		transition: all 0.5s ease-in-out;
	}
	.active {
		transition: all 0.5s ease-in-out;
	}

	span {
		font-family: var(--heading-font);
		text-transform: uppercase;
		font-weight: 600;
		font-size: 1.5rem;
		padding: var(--base-padding);
	}
</style>
