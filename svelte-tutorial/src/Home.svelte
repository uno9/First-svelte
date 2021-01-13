<script>
  import App from './App.svelte'
  import PokemonList from './PokemonList.svelte';

  let AppOpen = false;
  let PokeOpen = false;
  const AppToggle = () => AppOpen = !AppOpen;
  const PokeToggle = () => PokeOpen = !PokeOpen;

  // const linkName = ['App', 'Pokemon']
</script>

<body>

  <h2>Top Page</h2>

  <li>App Page
    <App />
  </li>

  <li>Pokemon Page
      <PokemonList />
  </li>

</body>