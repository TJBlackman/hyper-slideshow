<script>
	import { flip } from 'svelte/animate';
	import imageStore from '../store/images';
	import Container from './Container.svelte';
	import ImgTile from './image-tile.svelte';
</script>

<Container>
	<ul>
		{#each $imageStore as img (img.id)}
			<li animate:flip={{ duration: 250 }}>
				<ImgTile {img} />
			</li>
		{/each}
	</ul>
</Container>

<style>
	ul {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
	li {
		list-style: none;
	}
</style>
