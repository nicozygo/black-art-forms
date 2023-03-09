<script lang="ts">
	export let fixed: boolean;
	const today = new Date();
	const year = today.getFullYear();
</script>

<footer style={fixed ? 'position: fixed' : 'position: relative'}>
	<p>© Publicis Groupe {year}. All rights reserved</p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		bottom: 0;
		position: fixed;
		text-align: center;
	}
	@media screen and (max-width: 1024px) {
		footer {
			position: relative;
			bottom: 0;
		}
	}

	p {
		font-size: var(--font-size-sm);
	}
</style>
