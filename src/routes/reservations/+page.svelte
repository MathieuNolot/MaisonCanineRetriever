<script lang="ts">

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faD, faDog, faPenToSquare } from '@fortawesome/free-solid-svg-icons';  // faPaw

  import type { Dog } from '../../lib/Interfaces/Dog';

  import DogList from './ressources/DogList.svelte';
  import DogSelector from './ressources/DogSelector.svelte';
  import DogCount from './ressources/DogCount.svelte';
  import Calendar from '../../lib/Calendar/Calendar.svelte';
	import PriceTotal from './ressources/PriceTotal.svelte';

  let smallDogs = 0;
  let bigDogs = 0;
  // let dogs: Dog[] = [
  //   {
  //     name: "Newton",
  //     moreThan20Kg: true
  //   },
  //   {
  //     name: "Loufy",
  //     moreThan20Kg: false
  //   }
  // ];

  let selectedDates: string[] = [];

</script>

<div class="relative select-none w-full h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-start topSafePadding mt-16">

  <!-- <div class="text-xl font-semibold text-white titleFont pl-1 translate-y-3 w-11/12">
    Dates
  </div> -->

  <div class="w-11/12 md:w-8/12 pt-6 lg:pl-6">
    <Calendar
      bind:selectedDates
    />
  </div>

  <div
    class="
      w-full flex flex-col items-center lg:justify-around lg:h-1/2 xl:h-3/4 transition-all duration-300
    "
  >

    <DogList
      bind:smallDogs
      bind:bigDogs
    />

    <div
      class="w-11/12 flex items-center justify-center pb-8"
    >
      <PriceTotal
        smallDogs={smallDogs}
        bigDogs={bigDogs}
        selectedDates={selectedDates}
      />

    </div>

</div>

</div>

<!-- <style>

  @import url('https://fonts.cdnfonts.com/css/made-dillan');

  .titleFont {
    font-family: 'MADE Dillan', sans-serif;
  }

</style> -->
