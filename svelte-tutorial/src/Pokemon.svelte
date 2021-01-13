<script>
  // pokemon
  import Bar from './Bar.svelte';
  export let pokemon;

  // pokemon type background color
  const typeToClass = {
    'ほのお':'fire',
    'くさ':'grass',
    'みず':'water',
  };

  // open action
  let open = false;
  const toggle = () => open = !open;
</script>

<div class="pokemon {typeToClass[pokemon.type]}" on:click={toggle}>
  <h2>{pokemon.name}</h2>
  {#if open}
    <div class="stats">
      <h3>Status</h3>
      <Bar label="HP/{pokemon.hp}" value={pokemon.hp} />
      <Bar label="攻撃/{pokemon.atk}" value={pokemon.atk} />
      <Bar label="防御/{pokemon.def}" value={pokemon.def} />
      <Bar label="特攻/{pokemon.sAtk}" value={pokemon.sAtk} />
      <Bar label="特防/{pokemon.sDef}" value={pokemon.sDef} />
      <Bar label="素早/{pokemon.spd}" value={pokemon.spd} />
    </div>
  {:else}
    <p>クリックして詳細をみる</p>
  {/if}
</div>

<style>
  h2,
  h3{
    font-weight: normal;
  }

  .pokemon {
    color: white;
    padding: 1em;
    cursor: pointer;
  }

  .grass {
    background-color: rgb(96, 184, 69);
  }

  .fire {
    background-color: rgb(226, 82, 82);
  }

  .water {
    background-color: rgb(62, 104, 240);
  }
</style>