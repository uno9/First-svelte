import App from './Home.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte'
  }

});

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export default app;