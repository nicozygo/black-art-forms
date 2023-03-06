<script>
	import { fly } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import Menu from './Menu.svelte';
	export let showMobileMenu = false;

	const handleClick = () => {
		showMobileMenu = false;
	};
</script>

{#if showMobileMenu}
	<aside transition:fly={{ x: -1000, duration: 1000 }}>
		<div class="close" on:click={handleClick} on:keypress={handleClick}>
			<Icon name="close" />
		</div>
		<div class="navbar">
			<Menu mobile={true} on:click={handleClick} />
		</div>
	</aside>
{/if}

<style>
	aside {
		width: 100vw;
		height: 100vh;
		background-color: white;
		z-index: 999;
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

		.close {
			display: inline-flex;
			margin: 40px;
			flex-direction: row;
			justify-content: flex-end;
			align-items: flex-end;
			width: 90%;
		}

		.navbar {
			margin-top: 20vh;
		}

		@media screen and (min-width: 1000px) {
			.navbar {
			display: none;
			}
		}

</style>
