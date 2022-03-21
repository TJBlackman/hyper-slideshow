import { writable } from 'svelte/store';

const defaultStore = {
	imageDuration: 0.1
};

const store = writable(defaultStore);
export default store;

export function updateDuration(n: number) {
	store.update((s) => ({ ...s, imageDuration: n }));
}
