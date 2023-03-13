<script lang="ts">
	import { Lightbox } from 'svelte-lightbox';
	import Image from '$shared/Image.svelte';
	import type { ArtworkType } from '$types/ArtworkType';
	export let artwork: [ ArtworkType ];
</script>

<section class="vertical container" id="artwork">
	<div class="row">
		<div class="masonry">
			{#each artwork as art}
				<div class="item">
					<Lightbox description={`${art.attributes.name} ${art.attributes.caption}`}>
						<Image url={art.attributes.url} alt={art.attributes.alternativeText} class="art"/>
					</Lightbox>
					<p>{art.attributes.name}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.masonry {
		/* Masonry container */
		column-count: 4;
		column-gap: 1em;
		@media only screen and (max-width: 768px) {
			column-count: 2;
		}
	}
	.item {
		/* Masonry bricks or child elements */
		display: inline-block;
		margin: 0 0 1em;
		width: 100%;
	}
	.art  {
		width: 100%;
	}
</style>
