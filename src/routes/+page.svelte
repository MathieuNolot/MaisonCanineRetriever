<script lang="ts">

  import { fly } from "svelte/transition";

  import Title from "../lib/Title.svelte";

  let width: number;

  $: isMobile = width < 768

</script>

<main>

  <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-0 md:justify-evenly center h-screen w-screen relative subpixel-antialiased bg-neutral-50">

    <div class="w-10/12 md:w-1/3 flex flex-col gap-5 items-start justify-between md:justify-start select-none">

    {#if !isMobile}
    <div
      in:fly={{ delay: 50, duration: 1150, y: -1000}}
      class="w-full flex items-center justify-between select-none"
    >
      <Title />
      <img
        class="w-1/3 rounded-2xl hover:scale-[1.02] transition-all duration-500"
        src="/logo.jpg"
        alt="Maison Canine Retriever"
      />
    </div>
    {/if}

      <h1
        in:fly={{ delay: 50, duration: 1150, x: -1000}}
        class="text-xl md:text-3xl font-medium text-slate-300"
      >
        Offrez à votre chien le meilleur séjour possible chez Maison Canine Retriever
      </h1>

      <div
        in:fly={{ delay: 50, duration: 1150, y: 1000}}
        class="flex items-center justify-around md:justify-start w-full mb-10 md:ml-2 mt-4 gap-6"
      >
        <button
          type="button"
          class="
            bg-indigo-400 text-lg font-semibold px-5 py-2 rounded-2xl text-white
            hover:scale-105 transition-all duration-150
            active:scale-95"
        >
          Réserver une pension
        </button>

        <button
          type="button"
          class="
            bg-neutral-100 text-lg font-semibold px-5 py-2 rounded-2xl text-[#8E8C8A]
            hover:scale-105 transition-all duration-150
            active:scale-95"
        >
          Boutique animalière
        </button>
      </div>

    </div>

    <img
      in:fly={{ delay: 50, duration: 1150, x: 1000}}
      class="w-10/12 md:w-1/2 rounded-md md:rounded-lg shadow-lg shadow-zinc-700 md:hover:scale-105 transition-all duration-1000 cursor-pointer"
      src="https://static.wixstatic.com/media/904a44_77701463ce204e66a6aa41032d1ef889~mv2.jpeg/v1/fill/w_940,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0279.jpeg"
      alt="Maison Canine Retriever"
    />

    {#if isMobile}
      <div
        in:fly={{ delay: 50, duration: 1150, y: -1000}}
        class="w-10/12 flex flex-row-reverse items-center justify-around select-none"
      >
        <Title />
        <img
          class="w-1/2 rounded-xl"
          src="/logo.jpg"
          alt="Maison Canine Retriever"
        />
      </div>
    {/if}

  </div>

  <div class="flex items-center justify-evenly center h-screen w-screen relative subpixel-antialiased bg-neutral-50">

    <h1 class="text-3xl font-semibold">
      Présentation de la pension et de vous ?
    </h1>

    <div>
      Map
    </div>

  </div>

</main>

<svelte:window bind:innerWidth={width} />
