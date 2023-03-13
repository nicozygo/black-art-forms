<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Spinner from '$shared/Spinner.svelte';
	let src: string;
	export let url: string;
	export let alt: string = '';
	export let link: string = '#';
	export let name: string = '';
	export let title: string = '';

	onMount(async () => {
		const res = await fetch(url);
		src = await res.url;
	});

	onDestroy(() => {
		src = '';
		url = '';
	});
</script>

{#if src}
	<a href={link}>
		<figure>
			<img {src} {alt} />
			<figcaption>
				<div>
					<h3>{name}</h3>
					<p>{title}</p>
				</div>
			</figcaption>
		</figure>
	</a>
{:else}
	<Spinner />
{/if}

<style>
	figure {
		position: relative;
		transition: 0.5s ease;
	}

	figure:hover {
		scale: 1.25;
		z-index: 99;
		box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
		background: white;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		backface-visibility: hidden;
	}

	figcaption {
		background: linear-gradient(transparent 50%, black);
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: end;
		width: 100%;
		height: 100%;
		bottom: 0;
		padding-bottom: var(--base-padding);
		z-index: 99;
		opacity: 0;
		font-weight: 400;
		color: white;
		text-align: center;
		transition: opacity 0.2s ease-out;
	}

	p,
	h3 {
		width: 100%;
		text-align: center;
		opacity: 1;
		line-height: 1.25;
		font-size: 0.75em;
		padding: 0 0 2px;
		transition: opacity 0.5s ease-out;
	}
	figcaption:hover,
	h3:hover,
	p:hover {
		opacity: 1;
	}
</style>
