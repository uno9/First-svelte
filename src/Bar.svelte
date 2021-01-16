<script>
  export let label = '';
  export let value = 0;
</script>

<dev class="container">
  <div class="label">{label}</div>
  <div class="bar" style="--value: {value}px"></div>
</dev>

<style>
  .container{
    display: flex;
    align-items: center;
    height: 1.5em;
    padding: 0.2em 0;
  }

  .label{
    margin-right: 0.5em;
    width: 4em;
    text-align: right;
  }

  .bar{
    background-color: white;
    height: 100%;
    /* バーに引数を設定する事でpxを個別に指定 */
    width: var(--value, 0);
  }
</style>