import App from './App.svelte';
import firebase from 'firebase';
import { firebaseConfig } from './config';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte'
  }

});

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export default app;