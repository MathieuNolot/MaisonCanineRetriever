<script lang="ts">

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDog, faXmark, faMinus, faPlus, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

  // import type { Dog } from '../../../lib/Interfaces/Dog';

  import DogCount from './DogCount.svelte';

  export let smallDogs: number;
  export let bigDogs: number;

  function clearDogs() {
    smallDogs = 0;
    bigDogs = 0;
  }

</script>

<div
  class="
    w-11/12 flex flex-col items-center justify-center gap-3 pb-2 pt-6
  "
>

  <div class="w-full flex items-center justify-between">

    <div class="text-xl font-semibold text-white titleFont pl-1">
      Chiens
    </div>

    {#if smallDogs > 0 || bigDogs > 0}
      <button
        on:click={clearDogs}
        class="
          text-2xl font-semibold text-zinc-500 pr-2 -translate-y-[2px]
          md:hover:scale-105 active:scale-90 transition-all duration-300
        "
      >
        <Fa icon={faXmarkCircle} />
      </button>
    {/if}

  </div>

  <DogCount
    isSmall={false}
    bind:dogs={bigDogs}
  />

  <DogCount
    isSmall={true}
    bind:dogs={smallDogs}
  />

</div>

<style>

  @import url('https://fonts.cdnfonts.com/css/made-dillan');

  .titleFont {
    font-family: 'MADE Dillan', sans-serif;
  }

</style>
