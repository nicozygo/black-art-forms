<script lang="ts">
	export let mobile: boolean;
	// List of navigation items
	const menuItems = [
		{ id: 1, label: 'About', href: '/#about' },
		{ id: 2, label: 'Painters', href: '/#painters' },
		{ id: 3, label: 'Illustrators', href: '/#illustrators' },
		{ id: 4, label: 'Photographers', href: '/#photographers' },
		{ id: 6, label: 'Join us', href: '/#submit-your-work' }
	];
</script>

<ul class="{mobile ? 'mobile' : ''} menu">
	{#each menuItems as menuItem (menuItem.id)}
		<a href={menuItem.href} on:click>
			<li>{menuItem.label}</li>
		</a>
	{/each}
</ul>

<style>
	.mobile {
		flex-direction: column;
		padding: var(--padding-md);
		scale: 1.5;
	}

	.menu {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 0;
		padding-right: var(--padding-md);
		list-style: none;
	}

	.menu a {
		text-decoration: none;
	}

	.menu li {
		display: flex;
		align-items: center;
		padding-left: var(--base-padding);
		font-family: var(--heading-font);
		font-size: 1.25rem;
		font-weight: 600;
		text-transform: uppercase;
		text-decoration: none;
		line-height: 1.5;
	}

	.menu li::before {
		content: '';
		margin-right: var(--base-padding);
		border: solid 5px var(--primary);
		background: transparent;
		width: 8px;
		height: 8px;
		transform: rotate(45deg);
		transition: all 300ms ease-in-out;
	}

	.menu li:hover {
		color: var(--hover);
	}

	.menu li:hover::before {
		content: '';
		border: solid 5px var(--hover);
		background: var(--hover);
		width: 8px;
		height: 8px;
		transform: rotate(135deg);
	}
</style>
