<script lang="ts">

		export let width: number;
    let main: HTMLElement | null;

    export function scroll(e) {
      if (main && width > 1024) {
          main.scrollLeft += e.deltaY;
      }
		}

  </script>

<svelte:head>
   {#if width > 1024}
      <style>
         body {
            overflow: hidden;
         }
      </style>
   {/if}
</svelte:head>

<main bind:this={main} on:wheel={scroll} >
    <slot></slot>
</main>


<style>
	main {
		padding: 0;
	 	height: 95vh;
		display: flex;
		flex-wrap: nowrap;
		overflow-x: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		overflow-y: hidden;
		}

	main::-webkit-scrollbar {
			display: none;
		}


	@media (max-width: 1024px) {
		main {
			flex-wrap: wrap;
			flex-direction: column;
			overflow-x: hidden;
			height: auto;
		}
	}


</style>
