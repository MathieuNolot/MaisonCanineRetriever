<script lang="ts">

  import { fly } from "svelte/transition";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

  import Title from './Title.svelte';
  import Description from "./Description.svelte";
  import Buttons from "./Buttons.svelte";

</script>

<div
  class="flex flex-col md:flex-row items-center justify-start gap-12 md:gap-0 center contentHeight w-screen subpixel-antialiased relative select-none"
>
  <!-- DesktopUpscaled -->
  <img
      class="absolute top-0 bottom-0 left-0 right-0 -z-10 w-full h-full object-cover object-left-bottom flipX"
      src="FullBG.webp"
      alt="Golden retriever"
  />

  <!-- <div class="w-1/3"></div> -->

  <div
    class="
      w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-8 md:ml-12 pb-12
    "
  >

    <div
      class="topSafePadding
        flex flex-col gap-8 py-8
        backdrop-blur-md rounded-b-xl shadow-lg bg-neutral-800/40
        md:backdrop-blur-0 md:shadow-none md:bg-transparent
      "
    >

      <div
        in:fly={{ delay: 50, duration: 750, y: -1000}}
        class="
          w-full flex flex-row items-center justify-center select-none
          pt-5 sm:pt-16 md:pt-0
        "
      >
        <img
          class="w-1/3 rounded-full md:hover:scale-[1.03] transition-all duration-500"
          src="/logo.webp"
          alt="Maison Canine Retriever"
        />

      </div>

      <Description />

    </div>

    <div class="h-full md:h-0"></div>

      <Buttons isMobile={false} />

    <div class="h-[5%]"></div>

  </div>

  <!-- <div
    class="w-1/2 flex flex-col gap-5 items-center justify-center select-none h-full"
  >

    <div
      in:fly={{ delay: 50, duration: 750, y: -1000}}
      class="w-full flex flex-row items-center justify-start select-none"
    >

      <img
        class="w-1/3 rounded-full hover:scale-[1.02] transition-all duration-500"
        src="/logo.webp"
        alt="Maison Canine Retriever"
      />
    </div>

    <Description />

    <div class="pb-6">
      <Buttons isMobile={false} />
    </div>

  </div> -->

  <!-- <img
    in:fly={{ delay: 50, duration: 750, x: 1000}}
    class="w-10/12 md:w-1/2 rounded-md md:rounded-lg shadow-lg shadow-zinc-700 md:hover:scale-105 transition-all duration-1000 cursor-pointer"
    src="https://static.wixstatic.com/media/904a44_77701463ce204e66a6aa41032d1ef889~mv2.jpeg/v1/fill/w_940,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0279.jpeg"
    alt="Maison Canine Retriever"
  /> -->
  <!-- <div
    in:fly={{ delay: 50, duration: 750, x: 1000}}
    class="bg-indigo-400 w-1/2 h-4/6 flex items-center justify-center text-white font-semibold text-xl rounded-lg gap-3 shadow-md"
  >
    <Fa icon={faLocationDot} />
    Adresse ici
  </div> -->

</div>

<style>

  .flipX {
    transform: scaleX(-1);
  }

</style>
