<script lang="ts">
	import type { PageData } from '../$types';
	import Criteria from '$components/criteria/Criteria.svelte';

	export let data: PageData;
	export let criteria = data.props.data.criterion.data.attributes;
</script>

<main>
	<Criteria {criteria} />
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
