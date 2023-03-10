<script lang="ts">
	import type { PageData } from '../../$types';
	import Artist from '$lib/components/artist/Artist.svelte';

	export let data: PageData;
	let artist = data.props.artists.data[0].attributes;
	export let profile = artist.profilePhoto.data.attributes;
	export let name = artist.fullName;
	export let bio = artist.description;
</script>

<main>
	<Artist {name} {profile} {bio} />
</main>

<style>
	main {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
	}

	@media (max-width: 1024px) {
		main {
			flex-direction: column;
		}
	}

</style>
