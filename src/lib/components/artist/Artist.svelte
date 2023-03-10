<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Image from '$shared/Image.svelte';
	export let name: string;
	export let bio: string;
	export let profile: { alternativeText: string; url: string; caption: string; name: string };
</script>

<section class="vertical">
	<div class="row container">
		<div class="profile">
			<div class="diamond">
				<div class="inner">
					<Image url={profile.url} alt={profile.alternativeText} class="photo"/>
				</div>
			</div>
		</div>
		<div class="bio">
			<h2 class="title mb-2 pr-2">{name}</h2>
			<SvelteMarkdown source={bio} />
		</div>
	</div>
</section>

<style>
	.profile {
		margin: 10px;
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
		.inner {
			width: 355px;
			height: 355px;
			transform: rotate(-45deg) translateY(-74px);
		}

		@media screen and (max-width: 1200px) {
			.profile {
			margin: 100px auto 100px;
			}
		}

</style>
