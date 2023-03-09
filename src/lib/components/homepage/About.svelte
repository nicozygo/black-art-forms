<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	export let description: String;
</script>

<section class="horizontal" id="about">
	<div class="about">
		<div class="title">
			<h1>ABOUT</h1>
			<img src="/img/about.svg" alt="Black Artists" />
			<h1>FORMS</h1>
		</div>
		<div class="description">
			<SvelteMarkdown source={description} />
		</div>
	</div>
</section>

<style>
	img {
		width: 100%;
	}
	.about {
		display: grid;
		grid-template-columns: 1.25fr 1fr 20%;
		grid-template-rows: 1fr;
		grid-column-gap: var(--padding-md);
		grid-row-gap: 0px;
		align-items: center;
		height: 100%;
	}

	.title,
	.description {
		padding: var(--base-padding);
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		.about {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.about {
			grid-template-columns: 1fr;
		}
		img {
			width: 90%;
			margin: auto;
		}
	}
</style>
