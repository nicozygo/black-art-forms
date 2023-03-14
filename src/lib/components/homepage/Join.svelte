<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Form from '$shared/Form.svelte';

	export let title: string;
	export let description: string;
	export let cta: string;

	function handleOnSubmit() {
		console.log("I'm the handleOnSubmit() in App.svelte");
	}
</script>

<section class="horizontal" id="submit-your-work">
	<div class="join">
		<div class="description">
			<h2>{title}</h2>
			<SvelteMarkdown source={description} />
			<a href="/criteria">
				<button>{cta}</button>
			</a>
		</div>
		<div class="submit">
			<Form on:submit={handleOnSubmit} />
		</div>
	</div>
</section>

<style>
	.join {
		display: grid;
		grid-template-columns: 1fr 1fr 20%;
		grid-template-rows: 1fr;
		grid-column-gap: var(--padding-md);
		grid-row-gap: 0px;
		align-items: center;
		height: 100%;
	}

	.submit,
	.description {
		padding: var(--base-padding);
	}

	@media (min-width: 769px) and (min-width: 1025px) {
		.join {
			padding-left: var(--padding-xl);
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		.join {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.join {
			grid-template-columns: 1fr;
		}
	}
</style>
