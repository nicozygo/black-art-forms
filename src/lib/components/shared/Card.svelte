<script lang="ts">
	import { fade } from 'svelte/transition';
	import SvelteMarkdown from 'svelte-markdown';
	import Icon from './Icon.svelte';

	export let title: string;
	export let bio: string;
	export let photo: { name: String; caption: String; alternativeText: String; url: String };

	let { url } = photo;
	let visible = false;

	const toggleCard = () => {
		visible = !visible;
	};
</script>

<div
	class="card"
	on:click={toggleCard}
	on:keypress={toggleCard}
	style="background-image: url({url});"
>
	<div class="front-content">
		<h3>{title}</h3>
	</div>
	{#if visible}
		<div class="back-content" transition:fade={{ duration: 500 }}>
			<div class="close-button">
				<Icon name="close" />
			</div>
			<h2>{title}</h2>
			<SvelteMarkdown source={bio} />
		</div>
	{/if}
</div>

<style>
	.card {
		position: relative;
		width: 100%;
		min-height: 500px;
		z-index: 0;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		cursor: pointer;
	}

	.front-content {
		width: 100%;
		padding: var(--padding-md);
	}

	.back-content {
		position: absolute;
		top: 0;
		left: 0;
		height: 92%;
		height: calc(100% - 40px);
		background: var(--altcolor);
		overflow: scroll;
		color: var(--color);
		padding: var(--padding-md);
	}

	.close-button {
		display: flex;
		justify-content: end;
		align-items: center;
	}

	h3 {
		position: absolute;
		bottom: var(--padding-md);
		color: var(--color);
		background: var(--secondary);
		padding: 5px;
	}
</style>
