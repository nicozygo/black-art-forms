<script type="ts">
	import Header from '$shared/Header.svelte';
	import Footer from '$shared/Footer.svelte';
	import Sidebar from '$shared/Sidebar.svelte';

	let showMobileMenu = false;
	let fixed = false;
</script>

<Header bind:showMobileMenu />
<Sidebar bind:showMobileMenu />
<slot />
<Footer bind:fixed />
