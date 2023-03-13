<script lang="ts">
import Artist from './Artist.svelte';
	export let title: string;
	export let artists: {
		id: number;
		attributes: {
			fullName: string;
			excerpt: string;
			slug: string;
			genre: string;
			featured: boolean;
			featuredImage: {
				data: {
					attributes: { name: string; alternativeText: string; caption: string; url: string };
				};
			};
		};
	}[];
	export let open: boolean;
</script>

<section
	class="horizontal display-f justify-center align-center pt-2"
	id={title.toLocaleLowerCase()}
>
	<div class="row">
			<div class="row">
				<div class="masonry" style={open ? 'column-count:6' : 'column-count:5'}>
					{#each artists as artist}
						<Artist {artist} />
					{/each}
				</div>
			</div>
		</div>
</section>

<style>
	.masonry {
		column-gap: var(--base-padding);
		transition-property: all 4s ease-in-out 1s;
	}

	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		.masonry {
			column-count: 4;
		}
		}

		@media only screen and (max-width: 767px) and (min-width: 480px) {
			.masonry {
			column-count: 2;
			}
		}

		@media only screen and (max-width: 479px) {
			.masonry {
			column-count: 2;
			}
		}

</style>
