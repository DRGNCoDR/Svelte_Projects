import App from './app-test.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Daffodil',
  },
});

export default app;