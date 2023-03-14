<script lang="ts">
	import Icon from './Icon.svelte';
	export let dark = false;
	console.log('🚀 ~ file: DarkSwitch.svelte:4 ~ dark:', dark);

	function toggleTheme() {
		dark = !dark;
		if (dark) {
			document.documentElement.dataset.theme = 'dark';
		} else {
			document.documentElement.dataset.theme = 'light';
		}
	}
</script>

<button on:click={toggleTheme}>
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

	span {
		font-family: var(--heading-font);
		text-transform: uppercase;
		font-weight: 600;
		font-size: var(--font-size-lg);
		padding: var(--base-padding);
	}
</style>
