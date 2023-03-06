<script lang="ts">
	export let fixed: boolean;
	const today = new Date();
	const year = today.getFullYear();
</script>

<footer
	class="display-f justify-center align-center m-a p-1 t-c"
	style={fixed ? 'position: fixed' : 'position: relative'}
>
	<p class="p-0 m-0">© Publicis Groupe {year}. All rights reserved</p>
</footer>

<style>
	footer {
		width: 100%;
		bottom: 0;
		position: fixed;
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
