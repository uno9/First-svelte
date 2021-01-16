<script>
  import {Router, Link, Route} from 'svelte-routing';

  import App from './App.svelte'
  import PokemonList from './PokemonList.svelte';
  import NotFound from './NotFound.svelte';

  let url = '';
</script>

<h1>Link Page</h1>

<Router url='{url}'>
  <nav>
    <Link to="/">Home</Link>
    <Link to="app">App</Link>
    <Link to="pokemon">Pokemon</Link>
  </nav>
  
  <div>
    <Route path="/" />
    <Route path="app" component="{App}" />
    <Route path="pokemon" component="{PokemonList}" />
    <Route path="*" component="{NotFound}" />
  </div>
</Router>