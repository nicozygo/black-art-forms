<script lang="ts">
	import Artist from './Artist.svelte';
	import Drawer from './Drawer.svelte';
	import type { ArtistType } from '$types/ArtistType';
	export let title: string;
	export let artists: ArtistType[];
	export let open: boolean;
</script>

<section class="horizontal" id={title.toLocaleLowerCase()}>
	<div class={open ? 'gallery compressed' : 'gallery'}>
		<div class="drawer">
			<h2>{title}</h2>
			<Drawer {artists} bind:open />
		</div>
		<div class="row">
			<div class="masonry" style={open ? 'column-count:6' : ''}>
				{#each artists as artist}
					<Artist {artist} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.gallery {
		display: grid;
		grid-template-columns: 0.35fr 1.25fr 20%;
		grid-template-rows: 1fr;
		grid-column-gap: var(--padding-md);
		grid-row-gap: 0px;
		align-items: center;
		height: 100%;
		padding: 0 var(--base-padding);
	}

	.compressed {
		grid-template-columns: 0.65fr 1.25fr;
	}
	.drawer {
		display: flex;
		justify-content: start;
		align-items: center;
	}
	.masonry {
		column-count: 5;
		column-gap: var(--base-padding);
		transition-property: all 4s ease-in-out 1s;
	}

	@media only screen and (max-width: 1400px) and (min-width: 1024px) {
		.gallery {
			grid-template-columns: 0.5fr 1.25fr;
		}
		.compressed {
			grid-template-columns: 0.75fr 1.25fr;
		}
	}

	@media only screen and (max-width: 1023px) {
		.gallery {
			grid-template-columns: 1fr;
		}
		h2 {
			margin-bottom: var(--margin-md);
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		.masonry {
			column-count: 5;
		}
	}

	@media only screen and (max-width: 767px) {
		.gallery {
			margin: auto;
		}
		.masonry {
			column-count: 2;
		}
	}
</style>
