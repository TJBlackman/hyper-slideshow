import { writable } from 'svelte/store';

export type FileObj = File & { id: number; url: string };

const store = writable<FileObj[]>([]);

export function addImages(files: File[]) {
	const _files = files.map((file) => {
		const id = Math.floor(Math.random() * 1e15);
		const url = URL.createObjectURL(file);
		return { ...file, id, url };
	});
	store.update((files) => [...files, ..._files]);
}

export function removeImage(id: number) {
	store.update((files) =>
		files.reduce((acc, file) => {
			if (file.id === id) {
				URL.revokeObjectURL(file.url);
			} else {
				acc.push(file);
			}
			return acc;
		}, [])
	);
}

export default store;
