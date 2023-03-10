<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import List from '$shared/List.svelte';
	import Testimonial from './Testimonial.svelte';
	import type { TestimonialType } from '$types/TestimonialType';
	export let criteria: { criteriaInfo: string; judgesTitle: string; pageTitle: string };
	export let testimonial: TestimonialType;
	const title = criteria.pageTitle;
	const info = criteria.criteriaInfo;
</script>

<section class="vertical">
	<div class="criteria">
		<h2 class="title">{title}</h2>
		<div class="summary">
			<SvelteMarkdown source={info} renderers={{ listitem: List }} />
		</div>
		<div class="testimonial">
			<Testimonial {testimonial} />
		</div>
	</div>
</section>

<style>
	.criteria {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 0 var(--base-padding);
		max-width: 1400px;
	}

	.summary,
	.testimonial {
		width: 45%;
		padding: var(--padding-lg);
	}

	.testimonial {
		text-align: center;
	}
	@media screen and (max-width: 1024px) {
		.criteria {
			flex-direction: column;
		}
		.summary,
		.testimonial {
			width: 100%;
		}
		.title {
			width: 100%;
		}
	}
</style>
