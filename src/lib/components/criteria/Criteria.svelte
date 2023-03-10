<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import List from '$shared/List.svelte';
	export let criteria: { criteriaInfo: string; judgesTitle: string; pageTitle: string };
	const title = criteria.pageTitle;
	const info = criteria.criteriaInfo;
</script>

<section class="vertical">
	<div class="row container">
		<h2 class="title">{title}</h2>
		<div class="criteria">
			<SvelteMarkdown source={info} renderers={{ listitem: List }} />
		</div>
	</div>
</section>

<style>
	@media screen and (max-width: 1200px) {
		.title {
			width: 100%;
		}
	}
</style>
