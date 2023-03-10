<script lang="ts">
	import type { PageData } from '../$types';
	import Criteria from '$components/criteria/Criteria.svelte';
	import Judges from '$components/criteria/Judges.svelte';

	export let data: PageData;
	export let criteria = data.props.data.criterion.data.attributes;
	export let testimonial = data.props.data.testimonials.data[0].attributes;
	export let judges = data.props.data.judges.data;
</script>

<main>
	<Criteria {criteria} {testimonial} />
	<Judges {judges} />
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
