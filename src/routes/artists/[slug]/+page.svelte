<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

</script>

<main>
  {JSON.stringify(data)}
  <p>
    <a href="/">
      <button>Go to homepage</button>
    </a>
  </p>
</main>
