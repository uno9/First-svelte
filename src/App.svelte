<script>
  // greeting card
  import Greeting from './Greeting.svelte';
  import Card from './Card.svelte';

  // button action
  const message = ['Hello', 'svelte'];
  let current = 0;
  const toggle = () => current = (current + 1) % 2;

  // name input
  let firstName = '';
  let lastName = '';
  $: fullName = `${firstName} ${lastName}`

  // check_if
  let checked = false;
  
  // person each
  const person = [
    {name: 'jon' , hobbie: 'read a book📚' },
    {name: 'bob', hobbie: 'make a food🍚' },
    {name: 'alice', hobbie: 'go out🏃‍♀️' },
  ];

</script>

<main>
  <h1>App Page</h1>

  <div class="button_action">
    <h1>{message[current]}</h1>
    <button on:click={toggle}>Toggle message!</button>
  </div>

  <div class="greeting_card">
    <Card>
      <Greeting username='Svelte Master' />
    </Card>
  </div>

  <div class="input_name">
    <input placeholder="First name" bind:value={firstName}>
    <input placeholder="Last name" bind:value={lastName}>
    <div>{fullName}</div>
  </div>

  <div class="check_if">
    <label>
      <input type="checkbox" bind:checked={checked}>
    </label>
    {#if checked}
      <p class="check">Checked!</p>
    {:else}
      <p class="check">No Checked!</p>
    {/if}
  </div>

  <div class="person_each">
    {#each person as p}
    <li>{p.name}</li>
      <li>{p.hobbie}</li>
  {/each}
  </div>  
</main>

<style>
	main {
    width: 100%;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
  }
  
  div{
    margin: 20px auto;
  }

	h1 {
		color: #ff3e00;
		margin: 0 auto;
		font-size: 4em;
    font-weight: 100;
    margin: 20px;
  }
  
  button{
    cursor: pointer;
    outline: none;
    border: 0px;
    background-color: #ff3e00;
    color: aliceblue;
    font-weight: bold;
  }

  .check{
    color: #ff3e00;
  }
</style>