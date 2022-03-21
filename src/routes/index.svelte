<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ImageForm from '$lib/image-form.svelte';
	import ImgPreview from '$lib/image-grid.svelte';
</script>

<svelte:head>
	<title>HyperSlideshow</title>
</svelte:head>

<section>
	<h1>Hyper Slideshow</h1>
	<ImageForm />
	<hr />
	<ImgPreview />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
