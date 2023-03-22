<script lang="ts">

  import { fly } from "svelte/transition";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

  import Title from "./Title.svelte";
  import Description from "./Description.svelte";
  import Buttons from "./Buttons.svelte";

</script>

<div
  class="flex flex-col items-center justify-between topSafePadding contentHeight w-screen subpixel-antialiased bg-neutral-50"
>

  <div
    in:fly={{ delay: 50, duration: 750, y: -1000}}
    class="w-10/12 flex flex-row-reverse items-center justify-around select-none pt-6"
  >

    <Title />

    <img
      class="w-1/2 rounded-xl"
      src="/logo.png"
      alt="Maison Canine Retriever"
    />

  </div>

  <div class="w-10/12 select-none">
    <Description />
  </div>

  <!-- <img
    in:fly={{ delay: 50, duration: 750, x: 1000}}
    class="w-10/12 md:w-1/2 rounded-md"
    src="maison.webp"
    alt="Maison Canine Retriever"
  /> -->
  <div
    in:fly={{ delay: 50, duration: 750, x: 1000}}
    class="bg-indigo-400 w-10/12 h-1/3 flex items-center justify-center text-white font-semibold text-xl rounded-lg gap-2 shadow-md"
  >
    <Fa icon={faLocationDot} />
    Adresse ici
  </div>

  <div class="w-11/12 select-none pb-2">
    <Buttons isMobile={true} />
  </div>

</div>
