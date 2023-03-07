<script lang="ts">
	import type { PageData } from './$types';
  import Main from '$components/homepage/Main.svelte';
  import Intro from '$components/homepage/Intro.svelte';
  import About from '$components/homepage/About.svelte';

	export let data: PageData;
  export let width: number;

  export const homepage = data.props.homepage.data.attributes;

</script>

<svelte:window bind:innerWidth={width} />

<Main { width } >
  <Intro description={homepage.introduction} />
  <About description={homepage.about} />
</Main>
