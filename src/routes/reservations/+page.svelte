<script lang="ts">

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faD, faDog, faPenToSquare } from '@fortawesome/free-solid-svg-icons';  // faPaw

  import type { Dog } from '../../lib/Interfaces/Dog';

  import DogList from './ressources/DogList.svelte';
  import DogSelector from './ressources/DogSelector.svelte';
  import DogCount from './ressources/DogCount.svelte';
  import Calendar from '../../lib/Calendar/Calendar.svelte';
	import PriceTotal from './ressources/PriceTotal.svelte';

  let dogs: Dog[] = [
    {
      name: "Newton",
      moreThan20Kg: true
    },
    {
      name: "Loufy",
      moreThan20Kg: false
    }
  ];

  let selectedDates: string[] = [];

  let currentStep: number = 1;  // 2

</script>

<div class="relative select-none w-full h-full flex flex-col md:flex-row items-center justify-center topSafePadding mt-16">

  {#if currentStep == 0}

    <div class="flex flex-col w-full h-full items-center justify-between">

      <DogList
        bind:dogs
      />

      {#if dogs.length > 0}
        <div class="w-10/12 flex items-center justify-end mb-6">
          <button
            on:click={() => { currentStep = 1 }}
            class="
              bg-indigo-400 py-2 px-3 rounded-lg shadow-lg text-white font-semibold
              active:scale-90 md:hover:scale-105 transition-all duration-150
            "
          >
            Suivant
          </button>
        </div>
      {/if}

    </div>

  {:else}

    <div class="font-semibold w-full h-1/6 pb-2 flex items-center justify-between px-6 pt-3">
      <div class="text-2xl">
        Pour {dogs.length > 1 ? `mes ${dogs.length} chiens:` : 'mon chien:'}
      </div>

      <button
        on:click={() => { currentStep = 0 }}
        class="
          text-md text-indigo-500 flex items-center gap-2
          md:hover:scale-105 active:scale-90 transition-all duration-150
        "
      >
        modifier
        <Fa icon={faPenToSquare} />
      </button>
    </div>

  {/if}

  {#if currentStep == 1}

    <div class="w-full h-full flex flex-col items-center">
      <div class="w-full h-full flex items-center justify-center">
        <div class="w-[90%] h-4/6">
          <Calendar
            bind:selectedDates
          />
        </div>
      </div>

      <div class="pb-3 w-[94%]">
        <PriceTotal
          dogs={dogs}
          selectedDates={selectedDates}
        />
      </div>
    </div>
  {/if}

  <!-- <div class="flex flex-col items-center justify-start contentHeight w-screen relative subpixel-antialiased bg-neutral-50 overflow-clip topSafePadding">

    <div class="w-11/12 md:w-full flex flex-col items-center justify-center {dogs.length > 0 ? 'pb-6' : 'pb-2'}">
      <div
        class="text-lg font-semibold w-full pb-2"
      >
        {dogs.length > 1 ? `Mes ${dogs.length} chiens:` : 'Mon chien:'}
      </div>

      <div class="flex flex-col items-start w-full gap-1 px-1">
        {#each dogs as dog}

          <div class="flex gap-2 items-center justify-between w-full rounded-lg bg-neutral-50 shadow-lg h-11 px-3">

            <div class="flex gap-3 items-center">
              <div class="w-6 flex items-center justify-center">
                <Fa icon={faDog} class="{dog.moreThan20Kg ? 'text-xl' : 'text-sm'}" />
              </div>

              <div class="text-lg font-semibold">
                {dog.name}
              </div>
            </div>

            <div class="font-medium">
              {dog.moreThan20Kg ? '25' : '20'}€ / jour
            </div>

          </div>

        {/each}

        <DogSelector
          bind:dogs
        /> -->

        <!-- <div class="w-full h-[1px] bg-neutral-400 my-1"></div> -->
        <!-- <Calendar
          bind:selectedDates={selectedDates}
        />

        <div class="flex gap-2 items-center justify-between w-full rounded-lg bg-neutral-50 shadow-lg h-11 px-3">

          <div class="text-lg font-semibold">
            Total
          </div>

          <div class="flex gap-1">
            <div class="font-medium line-through text-red-500">
              -{total}€-
            </div>
            <div class="font-medium">
              {reduction}€ / jour
            </div>
          </div>

        </div>

      </div>
    </div> -->

    <!-- <DogCount
    /> -->

  <!-- </div> -->
</div>
