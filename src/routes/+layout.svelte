<script type="ts">
	import Header from '$shared/Header.svelte';
	import Footer from '$shared/Footer.svelte';

	let showMobileMenu = false;
	let fixed = false;
</script>

<Header bind:showMobileMenu />
<slot />
<Footer bind:fixed />
