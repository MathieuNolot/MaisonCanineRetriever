<script lang="ts">

  import { fly } from "svelte/transition";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

</script>

<h1
  in:fly={{ delay: 50, duration: 750, x: -1000}}
  class="
    flex flex-col items-center justify-center w-full gap-2 md:gap-3
  "
>
  <div
    class="
      titleFont
      text-white
      text-3xl
      sm:text-4xl
      md:text-3xl
      lg:text-4xl
      xl:text-5xl
      2xl:text-6xl
      transition-all duration-150
    "
  >
    Maison Canine Retriever
  </div>

  <div
    class="
      subTitleFont
      text-slate-200
      text-lg
      sm:text-lg
      md:text-lg
      lg:text-2xl
      xl:text-3xl
      2xl:text-4xl
      transition-all duration-150
    "
  >
    Offrez à votre chien le meilleur séjour possible
  </div>

  <div class="
    md:pt-2 text-indigo-100 gap-3 lg:gap-0
    flex flex-col lg:flex-row items-start lg:items-center justify-between titleFont
    text-sm w-[370px]
    lg:text-sm lg:w-[494px]
    xl:text-lg xl:w-[624px]
    2xl:text-lg 2xl:w-[754px]
  ">

    <a
      href="https://maps.google.com/?q=48%20Avenue%20Pierre%20Mendès-France,%2002000%20Laon"
      target="_blank"
      class="flex items-center gap-2 md:gap-3 md:hover:scale-105 transition-all duration-500">
      <Fa icon={faLocationDot} />
      <div>48 Avenue Pierre Mendès-France, 02000 Laon</div>
    </a>

    <a
      href="tel:+33667780396"
      class="flex items-center gap-2 md:gap-3 md:hover:scale-105 transition-all duration-500"
    >
      <Fa icon={faPhone} />
      <div>06 67 78 03 96</div>
    </a>

  </div>

</h1>

<style>

  @import url('https://fonts.cdnfonts.com/css/made-dillan');
  @import url('https://fonts.cdnfonts.com/css/averia');
  /* @import url('https://fonts.cdnfonts.com/css/stock-quote'); */

  .titleFont {
    font-family: 'MADE Dillan', sans-serif;
  }

  .subTitleFont {
    font-family: 'Averia', sans-serif;
  }

  /* .subTitleFont {
    font-family: 'Stock Quote', sans-serif;
  } */

</style>
