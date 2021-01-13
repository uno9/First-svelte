import App from './Home.svelte';

const app = new App({
	target: document.body,
	props: {
	}
});

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export default app;