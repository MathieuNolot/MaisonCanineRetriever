<script lang="ts">

  import { fly } from "svelte/transition";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faPhone } from '@fortawesome/free-solid-svg-icons';

  export let isMobile: boolean

</script>

<div
  in:fly={{ delay: 50, duration: 750, y: 1000}}
  class="w-full flex items-center justify-center"
>

  <a
    href="/reservations"
    class="flex items-center justify-center
      buttonFont
      backdrop-blur-xl bg-neutral-600/40 rounded-xl shadow-lg
      text-xl
      sm:text-xl
      md:text-xl
      lg:text-xl
      xl:text-xl
      2xl:text-4xl px-6 py-3
      font-semibold text-white
      md:hover:scale-105 transition-all duration-150
      active:scale-90"
  >
    Réserver
  </a>

  <!-- <a
    href="/boutique"
    class="flex items-center justify-center h-11
      bg-neutral-100 text-lg font-semibold px-5 rounded-xl text-[#8E8C8A] shadow-lg
      md:hover:scale-105 transition-all duration-150
      active:scale-90"
  >
    Boutique
  </a> -->

  <!-- <a
    href="tel:+33667780396"
    class="flex items-center justify-center h-11 gap-3
      bg-emerald-400 text-lg font-semibold px-5 rounded-xl text-white shadow-xl
      md:hover:scale-105 transition-all duration-150
      active:scale-90"
    >
      <Fa icon={faPhone} />
      {#if !isMobile}
        06 67 78 03 96
      {/if}
  </a> -->

</div>

<style>

  @import url('https://fonts.cdnfonts.com/css/risque');

  .buttonFont {
    font-family: 'Risque', sans-serif;
  }

</style>
