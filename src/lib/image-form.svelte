<script>
	import { addImages } from '../store/images';
	import settingsStore, { updateDuration } from '../store/slideshow-settings';

	function handleFileInput(e) {
		addImages(Array.from(e.target.files));
		e.target.value = '';
	}

	function handleDuration(e) {
		updateDuration(e.target.value);
	}
</script>

<form>
	<div class="form-group">
		<label for="images">Add Images to Slideshow</label>
		<input type="file" multiple id="images" on:input={handleFileInput} />
	</div>
	<div class="form-group">
		<label for="duration">Set Duration</label>
		<input
			type="number"
			min="0"
			max="60"
			step="0.05"
			id="duration"
			value={$settingsStore.imageDuration}
			on:input={handleDuration}
		/>
	</div>
	<a href="/slideshow">Slideshow</a>
</form>

<style>
	.form-group {
		display: block;
		margin-bottom: 10px;
	}
	label {
		display: block;
	}
</style>
