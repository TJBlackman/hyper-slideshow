<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import imageStore from '../store/images';
	import settings from '../store/slideshow-settings';

	let interval: NodeJS.Timer = null;

	const intervalDuration = $settings.imageDuration * 1000;
	let i = 1;
	let currentImg = $imageStore[0];
	console.log(intervalDuration);
	interval = setInterval(() => {
		currentImg = $imageStore[i];
		i = i === $imageStore.length - 1 ? 0 : i + 1;
	}, intervalDuration);

	onDestroy(() => {
		clearInterval(interval);
	});

	let showCloseBtn = false;
	let timeout: NodeJS.Timer = null;
	const showCloseButton = (() => {
		return () => {
			showCloseBtn = true;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				showCloseBtn = false;
			}, 1500);
		};
	})();
</script>

<main on:mousemove={showCloseButton}>
	{#if showCloseBtn}
		<a href="/">Close</a>
	{/if}
	<div style={`background-image: url("${currentImg.url}")`} />
	<img src={currentImg.url} alt="" loading="eager" />
</main>

<style>
	main {
		background-color: rgba(0, 0, 0, 0.9);
		position: relative;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		display: block;
		width: auto;
		max-width: 100vw;
		height: auto;
		max-height: 100vh;
		z-index: 2;
	}
	div {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background-size: cover;
		background-position: center center;
		height: 100vh;
		width: 100vw;
		filter: blur(20px);
	}
	a {
		position: absolute;
		top: 10px;
		left: 48%;
		z-index: 3;
		padding: 4px 8px;
		background-color: rgba(0, 0, 0, 0.85);
		color: white;
		text-decoration: none;
		border-radius: 4px;
	}
	:global(body) {
		margin: 0;
	}
</style>
