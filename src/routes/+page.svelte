<script lang="ts">
	import type { PageData } from './$types';
  import Intro from '$components/homepage/Intro.svelte';

	export let data: PageData;

  export const homepage = data.props.homepage.data.attributes;

</script>

<main>
  <Intro description={homepage.introduction} />
</main>
