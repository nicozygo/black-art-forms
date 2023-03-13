<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { ArtistType } from '$types/ArtistType';
	export let artists: ArtistType[];
	export let open: boolean = false;
	export let color: string = 'black';
	const toggle = () => (open = !open);
</script>

<div class="list">
	{#if open}
		<ul transition:fly={{ x: -20, duration: 500 }}>
			{#each artists as artist}
				<a href={`/artists/${artist.attributes.slug}`}>
					<li>{artist.attributes.fullName}</li>
				</a>
			{/each}
		</ul>
	{/if}
	<button on:click={toggle} aria-expanded={open}>
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.5 22.5L19 15L11.5 7.5" stroke={color} stroke-width="4" />
		</svg>
	</button>
</div>

<style>
	.list {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		height: 100%;
		border: none;
		background: none;
		display: block;
		color: inherit;
		font-size: 36px;
		cursor: pointer;
		margin: 0;
		padding-bottom: 0.5em;
		padding-top: 0.5em;
	}

	@media screen and (max-width: 1024px) {
		button {
			display: none;
		}
	}

	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.5turn);
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		height: 100%;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	li {
		list-style-type: none;
		margin-bottom: var(--base-margin);
	}

	li:hover {
		color: var(--hover);
	}
</style>
