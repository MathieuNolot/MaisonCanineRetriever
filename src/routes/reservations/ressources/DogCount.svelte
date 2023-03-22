<script lang="ts">

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDog } from '@fortawesome/free-solid-svg-icons';

  let count: number = 0;

</script>

<div>

  <Fa icon={faDog} />

  <div>{count}</div>

</div>
