<script lang="ts">
	import type { PageData } from './$types';
	import Main from '$components/homepage/Main.svelte';
	import Intro from '$components/homepage/Intro.svelte';
	import About from '$components/homepage/About.svelte';
	import Artists from '$components/homepage/Artists.svelte';
	import Partners from '$components/homepage/Partners.svelte';
	import Join from '$components/homepage/Join.svelte';

	export let data: PageData;
	export let width: number;

	export const homepage = data.props.homepage.data.attributes;
	export const partners = data.props.partners.data;
	let artists = data.props.artists.data;
</script>

<svelte:window bind:innerWidth={width} />

<Main {width}>
	<Intro description={homepage.introduction} />
	<About description={homepage.about} />
	<Partners {partners} title={homepage.partnersTitle} />
	{#if artists.length > 0}
		<Artists {artists} title="Painters" open={false} />
	{/if}
	<Join
		title={homepage.submitYourWorkTitle}
		description={homepage.submitYourWork}
		cta={homepage.criteriaButton}
	/>
</Main>
