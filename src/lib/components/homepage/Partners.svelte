<script lang="ts">
	import type { PartnerType } from '$types/PartnerType';
	import Partner from './Partner.svlete';
	export let title: string;
	export let partners: [PartnerType];
</script>

<section class="horizontal" id="partners">
	<div class="wrapper">
		<div class="title">
			<h2>{title}</h2>
		</div>
		<div class="partners">
			{#each partners as partner}
				<Partner {partner} />
			{/each}
		</div>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 1200px) {
		.wrapper {
			flex-direction: column;
			align-items: start;
		}
	}

	.title {
		display: flex;
		align-items: center;
	}

	.partners {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		align-items: center;
		justify-content: center;
		padding: 20px;
		height: fit-content;
	}

	@media (max-width: 768px) {
		.partners {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(4, 1fr);
			margin: auto;
			padding: 10px 20px 10px 0;
		}
	}
</style>
