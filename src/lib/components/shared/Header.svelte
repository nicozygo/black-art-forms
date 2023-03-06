<script>
	import Menu from './Menu.svelte';
	import Icon from './Icon.svelte';

	// Show mobile icon and display menu
	export let showMobileMenu = false;

	// Mobile menu click event handler
	const handleIconClick = () => (showMobileMenu = !showMobileMenu);
</script>

<header>
	<nav>
		<div>
			<a href="/">
				<img src="/img/logo.svg" alt="site logo" />
			</a>
		</div>
		<div class="desktop-menu">
			<Menu mobile={false} />
		</div>
		<div class="mobile-menu" on:click={handleIconClick} on:keyup={handleIconClick}>
			<Icon name="open" size="32px" />
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		position: fixed;
		width: 100%;
		box-shadow: 0 0 10px var(--grey);
		background: rgba(255, 255, 255, 0.95);
		z-index: 99;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: var(--base-padding);
		margin: 0 auto;
	}

	.mobile-menu,
	.desktop-menu {
		padding-right: var(--base-padding);
	}

	@media (min-width: 900px) {
		.mobile-menu {
			display: none;
		}
	}

	@media (max-width: 900px) {
		.desktop-menu {
			display: none;
		}
	}
</style>
