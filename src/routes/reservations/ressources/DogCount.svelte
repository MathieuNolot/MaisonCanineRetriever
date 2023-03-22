<script lang="ts">

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDog, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

  // import type { Dog } from '../../../lib/Interfaces/Dog';

  export let isSmall: boolean
  export let dogs: number;

</script>

<div class="text-white font-semibold flex w-full items-center justify-between p-4 bg-zinc-900 rounded-xl shadow-lg">

  <div class="flex flex-col gap-1 items-start justify-start w-full subTitleFont">

    <div>
      {isSmall ? 'Petit' : 'Grand'} Chien
    </div>

    <div class="text-sm font-normal text-zinc-400 pl-1">
      {isSmall ? '-' : '+'} de 20Kg
    </div>
    <!-- <Fa icon={faDog} class="{isSmall ? 'text-sm pr-[4px]' : 'text-2xl pr-[6px]'} -translate-y-2" />

    <div class="text-base">
      Chiens de {isSmall ? 'moins' : 'plus'} de 20kg
    </div> -->

  </div>

  <div class="flex items-center justify-center gap-3">

    <button
      on:click={() => { if (dogs > 0) dogs = dogs - 1 }}
      class="
        w-12 h-12 flex items-center justify-center
        md:hover:scale-105 active:scale-90 transition-all duration-300
      "
    >
      <Fa icon={faMinus} />
    </button>

    <div class="w-8 flex items-center justify-center text-xl text-indigo-400 titleFont">
      {dogs}
    </div>

    <button
      on:click={() => { dogs = dogs + 1 }}
      class="
        w-12 h-12 flex items-center justify-center
        md:hover:scale-105 active:scale-90 transition-all duration-300
      "
    >
      <Fa icon={faPlus} />
    </button>

  </div>

</div>

<style>

  @import url('https://fonts.cdnfonts.com/css/made-dillan');
  @import url('https://fonts.cdnfonts.com/css/averia');

  .titleFont {
    font-family: 'MADE Dillan', sans-serif;
  }

  .subTitleFont {
    font-family: 'Averia', sans-serif;
  }

</style>
