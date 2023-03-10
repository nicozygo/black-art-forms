<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Image from '$shared/Image.svelte';
	export let testimonial;
	export let { summary, fullName, jobTitle, profilePhoto } = testimonial;
	export let url: string = profilePhoto.data.attributes.url;
	export let alt: string = profilePhoto.data.attributes.alternativeText;
</script>

<div class="wrapper">
	<div>
		<SvelteMarkdown source={summary} />
	</div>
	<div class="profile">
		<div class="image">
			<Image {url} {alt} width="80px" height="auto" class="rounded" />
		</div>
		<div class="details">
			<h3>{fullName}</h3>
			<p>{jobTitle}</p>
		</div>
	</div>
</div>

<style>
	.wrapper {
		max-width: 650px;
	}

	.profile {
		display: inline-flex;
		padding: var(--padding-md) 0;
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		padding-left: var(--padding-lg);
		line-height: 1;
	}
</style>
