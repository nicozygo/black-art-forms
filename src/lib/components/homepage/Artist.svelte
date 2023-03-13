<script lang="ts">
	import ImageHover from '$shared/ImageHover.svelte';
	import type { ArtistType } from '$types/ArtistType';
	export let artist: ArtistType;
	const url = artist.attributes.featuredImage.data.attributes.url;
	const alt = artist.attributes.featuredImage.data.attributes.alternativeText;
	const slug = artist.attributes.slug;
	const name = artist.attributes.fullName;
	const title = artist.attributes.featuredImage.data.attributes.name;
</script>

<div class="item">
	<ImageHover {url} {alt} {name} {title} link={`/artists/${slug}`} />
</div>

<style>
	.item {
		display: inline-block;
		margin: 0 0 var(--base-margin);
		width: 100%;
	}
</style>
