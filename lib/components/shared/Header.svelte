<script>
	import Menu from './Menu.svelte';
	import Icon from './Icon.svelte';


	// Show mobile icon and display menu
	export let showMobileMenu = false;

	// Mobile menu click event handler
	const handleIconClick = () => (showMobileMenu = !showMobileMenu);
</script>

<header class="display-f align-center p-1">
	<nav class="display-f justify-space-between align-center">
		<div class="p-0">
			<a href="/">
				<img src="/img/baf-logo.svg" alt="site logo" />
			</a>
		</div>
		<div class="desktop-menu p-0">
			<Menu mobile={false} />
		</div>
		<div class="mobile-menu p-2" on:click={handleIconClick} on:keyup={handleIconClick}>
			<Icon name="open" size="32px" />
		</div>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		box-shadow: 0 0 10px var(--grey);
		background: rgba(255, 255, 255, 0.95);
		z-index: 99;
  }

	nav {
			width: 100%;
			padding: 0 var(--base-padding);
			margin: 0 auto;
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
