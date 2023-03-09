<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	export let description: String;
</script>

<section class="horizontal">
	<div class="intro">
		<div class="title">
			<h1>WHERE</h1>
			<img src="/img/intro.svg" alt="Black Artists" />
			<h1>THRIVE</h1>
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
	.intro {
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
		.intro {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.intro {
			grid-template-columns: 1fr;
		}
		img {
			width: 90%;
			margin: auto;
		}
	}
</style>
