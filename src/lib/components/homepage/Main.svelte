<script lang="ts">
	import { onMount } from 'svelte';

		export let width: number;
    let main: HTMLElement | null;

    export function scroll(e) {
      if (main && width > 1024) {
          main.scrollLeft += e.deltaY;
      }
		}

		export function hidden(width: number) {
			if (width > 1024) {
				return 'hidden'
			} else {
				return 'scroll'
			}
		}

  </script>

 	<svelte:body />

	{console.log(width)}
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
