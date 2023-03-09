<script lang="ts">
	import type { PartnerType } from '$types/PartnerType';
	import Tooltip from '$components/shared/Tooltip.svelte';
	import Image from '$components/shared/Image.svelte';
	export let partner: PartnerType;
	const url = partner.attributes.logo.data.attributes.url;
	const alt = partner.attributes.logo.data.attributes.alternativeText;
	const description = partner.attributes.description;
</script>

<Tooltip {description}>
	<Image {url} {alt} class="logo" />
</Tooltip>
