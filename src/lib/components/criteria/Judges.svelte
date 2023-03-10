<script lang="ts">
	import Card from '$lib/components/shared/Card.svelte';
	import type { JudgeType } from '$types/JudgeType';
	export let judges: [JudgeType];
</script>

<section class="vertical">
	<div class="container">
		<h2 class="title">Judges</h2>
		<div class="judges">
			{#each judges as judge}
				<div>
					<Card
						title={judge.attributes.fullName}
						bio={judge.attributes.judgeBio}
						photo={judge.attributes.judgePhoto.data.attributes}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.judges {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		align-items: center;
		justify-content: center;
		padding: 20px;
		height: fit-content;
	}

	@media screen and (max-width: 1200px) {
		.judges {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
		.title {
			width: 100%;
		}
	}

	@media screen and (max-width: 1024px) {
		.judges {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 650px) {
		.judges {
			display: grid;
			grid-template-columns: 1fr;
		}
	}
</style>
