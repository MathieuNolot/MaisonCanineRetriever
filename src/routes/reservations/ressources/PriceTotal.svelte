<script lang="ts">

  import { scale } from "svelte/transition";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons';  // faPaw

  import type { Dog } from '../../../lib/Interfaces/Dog';

  export let dogs: Dog[];

  export let selectedDates: Date[];

  $: total = Object.values(dogs).reduce((a, b) => a + (b.moreThan20Kg ? 25 : 20), 0) * selectedDates.length

  $: reduction = dogs.length > 1 ? total - (total * .1) : total

</script>

<!-- {#if total > 0} -->
  <div class="flex gap-2 items-center justify-between w-full pl-2 pr-1 h-11">

    {#if dogs.length === 0 || selectedDates.length === 0}
      <div
        in:scale={{duration: 300}}
        class="text-lg font-semibold w-full flex items-center justify-center"
      >
        Veuillez sélectionner vos dates.
      </div>
    {:else}
      <div
        in:scale={{duration: 300}}
        class="text-lg font-semibold"
      >
        Pour {dogs.length} chien{dogs.length > 1 ? 's' : ''}, {selectedDates.length} jour{selectedDates.length > 1 ? 's' : ''}:
      </div>
    {/if}

    {#if dogs.length !== 0 && selectedDates.length !== 0}
      <div class="flex gap-4 items-center">

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

  </div>
<!-- {/if} -->
