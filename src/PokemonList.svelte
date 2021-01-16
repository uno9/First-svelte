<script>
  import Pokemon from './Pokemon.svelte';

  const pokemons = [
    {
      name: 'フシギダネ', type: 'くさ',
      hp: 45, atk: 49, def: 49, sAtk: 65, sDef: 65, spd: 45
    },
    {
      name: 'ゼニガメ', type: 'みず',
      hp: 50, atk: 48, def: 40, sAtk: 77, sDef: 64, spd: 69
    },
    {
      name: 'ヒトカゲ', type: 'ほのお',
      hp: 39, atk: 52, def: 43, sAtk: 60, sDef: 50, spd: 65
    },
    {
      name: 'ゼニガメ', type: 'みず',
      hp: 44, atk: 48, def: 65, sAtk: 50, sDef: 64, spd: 43
    },
]
</script>

<main>
  {#each pokemons as p}
    <Pokemon pokemon={p}/>
  {/each}
</main>

<style>
</style>