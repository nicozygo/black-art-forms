<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Image from '$shared/Image.svelte';
	export let name: string;
	export let bio: string;
	export let profile: { alternativeText: string; url: string; caption: string; name: string };
</script>

<section class="vertical">
	<div class="artist">
		<div class="profile">
			<div class="diamond">
				<div class="inner">
					<Image url={profile.url} alt={profile.alternativeText} class="photo"/>
				</div>
			</div>
		</div>
		<div class="bio">
			<h2 class="title">{name}</h2>
			<SvelteMarkdown source={bio} />
		</div>
	</div>
</section>

<style>

	.artist {
		display: grid;
		grid-template-columns: .5fr 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: var(--padding-md);
		grid-row-gap: 0px;
		align-items: center;
		max-width: 1400px;
		margin: 0 auto var(--margin-md);
	}
	.profile {
		padding-left: var(--padding-md);
		margin: 100px auto 100px;
	}
	.diamond {
		margin: auto;
		transform-origin: 50% 50%;
		overflow: hidden;
		width: 250px;
		height: 250px;
		transform: rotate(45deg) translateY(10px);
		border: var(--base-padding) solid black;
	}

	.bio {
		max-width: 768px;
		margin: auto;
		padding: var(--base-padding);
	}
		.inner {
			width: 355px;
			height: 355px;
			transform: rotate(-45deg) translateY(-74px);
		}

		@media screen and (max-width: 1024px) {
			.artist {
		display: grid;
		grid-template-columns: 1fr;
		}
	}

</style>
