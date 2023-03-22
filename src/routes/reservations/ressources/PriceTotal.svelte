<script lang="ts">

  import { scale } from "svelte/transition";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons';  // faPaw

  import type { Dog } from '../../../lib/Interfaces/Dog';

  // export let dogs: Dog[];
  export let smallDogs: number;
  export let bigDogs: number;

  export let selectedDates: string[];

  $: dogs = smallDogs + bigDogs;

  // $: total = Object.values(dogs).reduce((a, b) => a + (b.moreThan20Kg ? 25 : 20), 0) * selectedDates.length
  $: total = (smallDogs * 20 + bigDogs * 25) * selectedDates.length

  $: reduction = dogs > 1 ? total - (total * .1) : total

</script>

<div
  class="
    w-[96%] flex items-center justify-between pt-4
    text-white
  "
>

  <div class="flex flex-col gap-2">

    <div
      class="text-sm font-semibold text-zinc-500 subTitleFont"
    >
      {dogs} chiens {selectedDates.length} jours
    </div>

    <div class="flex gap-4 items-start">

      <div
        class="text-3xl font-semibold titleFont"
      >
        {reduction}€
      </div>

      <div
        class="text-base line-through titleFont text-red-500"
      >
        {total}€
      </div>

    </div>

  </div>

  <div
    class="text-2xl font-semibold titleFont bg-indigo-400 px-5 py-3 shadow-lg rounded-xl translate-y-1"
  >
    Réserver
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

<!-- {#if total > 0} -->
  <!-- <div class="flex gap-2 items-start justify-between w-full pl-2 pr-1 h-11 mt-2">

    {#if dogs === 0 || selectedDates.length === 0}
      <div
        in:scale={{duration: 300}}
        class="text-lg font-semibold w-full flex items-center justify-center text-white"
      >
        Veuillez sélectionner vos dates.
      </div>
    {:else}
      <div
        in:scale={{duration: 300}}
        class="text-lg font-semibold text-white"
      >
        Pour {dogs} chien{dogs > 1 ? 's' : ''}, {selectedDates.length} jour{selectedDates.length > 1 ? 's' : ''}:
      </div>
    {/if}

    {#if dogs !== 0 && selectedDates.length !== 0}
      <div class="flex gap-4 items-center justify-end w-full">

        {#if total != reduction}
          <div class="font-medium line-through text-red-500">
            {total.toLocaleString('fr')}€
          </div>
        {/if}

        <button
          on:click={() => { }}
          class="
            font-semibold text-white shadow-lg w-[100px] py-2 rounded-lg flex gap-2 items-center justify-center bg-indigo-400
            md:hover:scale-105 active:scale-90 transition-all duration-150
          "
        >
          <Fa icon={faCartShopping} />
          {reduction.toLocaleString('fr')}€
        </button>

      </div>
    {/if}

  </div> -->
<!-- {/if} -->
