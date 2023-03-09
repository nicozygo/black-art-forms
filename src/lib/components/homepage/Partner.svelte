<script lang="ts">
	import type { PartnerType } from '$types/PartnerType';
	import Tooltip from '$components/shared/Tooltip.svelte';
	export let partner: PartnerType;
	const src = partner.attributes.logo.data.attributes.url;
	const alt = partner.attributes.logo.data.attributes.alternativeText;
	const description = partner.attributes.description;
</script>

<Tooltip {description}>
	<img {src} {alt} />
</Tooltip>

<style>
	img {
		background-color: white;
		max-width: 200px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		img {
			max-width: 160px;
		}
	}

	@media (max-width: 768px) {
		img {
			max-width: 100%;
		}
	}
</style>
