<script lang="ts">
	import type { FileObj } from '../store/images';
	import { removeImage } from '../store/images';
	export let img: FileObj = null;

	function removeImg() {
		removeImage(img.id);
	}
</script>

<div>
	<button type="button" on:click={removeImg}>X</button>
	<img src={img.url} alt="img-preview" />
</div>

<style>
	div {
		position: relative;
	}
	button {
		position: absolute;
		top: 0;
		right: 10px;
		background-color: rgba(0, 0, 0, 0.2);
		color: white;
		border-radius: 50%;
		height: 20px;
		width: 20px;
		text-align: center;
		border: none;
		font-size: 10px;
	}
	button:hover {
		background-color: rgba(0, 0, 0, 0.85);
		cursor: pointer;
	}
	img {
		display: block;
		height: 200px;
		margin: 6px;
		width: auto;
		margin: 4px;
	}
</style>
