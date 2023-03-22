<script lang="ts">

  import "../app.css";

  import { onMount } from "svelte";
  import { page } from "$app/stores";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

  import "../lib/BarButton.svelte"
	import BarButton from "../lib/BarButton.svelte";

  let width: number;
  let scrollY: number;

  let openMobileMenu = false;  // false

  // $: isMobile = width < 768
  $: showMobileBar = width < 768 ? openMobileMenu ? true : $page.route.id === '/' ? scrollY > 100 : true : scrollY > 100;

  onMount(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log("This is running as standalone.");
    } else {
      console.log("This is running on safari");
    }
  });

</script>

<div class="flex flex-col-reverse md:flex-col">

  <!-- {#if width != null} -->
    <!-- <div class="flex items-center justify-center bg-neutral-100 drop-shadow-xl bottomSafePadding">

      <div class="flex items-center justify-between w-full px-8 h-16">

        {#if !isMobile}
          <BarButton value="acceuil" isMobile={isMobile} />
        {/if}

        <div class="
          flex items-center justify-around md:justify-end gap-12 w-full md:w-fit
        "
        >
          {#if isMobile}
            <BarButton value="acceuil" isMobile={isMobile} />
          {/if}

          <BarButton value="reservations" isMobile={isMobile} />
          <BarButton value="boutique" isMobile={isMobile} />
          <BarButton value="panier" isMobile={isMobile} />

        </div>

      </div>

    </div> -->
    <div
      class="
        fixed top-0 right-0 left-0 z-50 px-8 sm:h-16 flex items-center {showMobileBar ? 'bg-zinc-800 shadow-lg' : ''}
        transition-all duration-300 rounded-b-md
        -translate-y-[1px] sm:translate-y-0 topSafePadding
      "
    >

      <div
        class="
          w-0 h-0 opacity-0 pointer-events-none
          sm:w-full sm:h-fit sm:opacity-100 sm:pointer-events-auto
          transition-all duration-300
          flex items-center justify-between
        "
      >
        <BarButton value="acceuil" isMobile={false} bind:close={openMobileMenu} />

        <div
          class="
            flex items-center justify-end gap-12 w-full
          "
        >

        <BarButton value="reservations" isMobile={false} bind:close={openMobileMenu} />
        <BarButton value="boutique" isMobile={false} bind:close={openMobileMenu} />
        <BarButton value="panier" isMobile={false} bind:close={openMobileMenu} />

        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="
          w-full h-fit opacity-100 pointer-events-auto
          sm:w-0 sm:h-0 sm:opacity-0 sm:pointer-events-none
          flex-col items-center justify-start
        "
      >

        <div class="w-full flex items-center justify-between h-16">
          <a
            href="/"
            class="
              titleFont text-white text-lg translate-y-[2px] {showMobileBar ? '' : 'opacity-0'} flex items-center
              md:hover:scale-105 active:scale-90 transition-all duration-300
            "
          >

            <img
              class="w-10 h-10 -translate-x-4 rounded-full md:hover:scale-[1.03] transition-all duration-500"
              src="/logo.webp"
              alt="Maison Canine Retriever"
            />

            <div>Maison Canine Retriever</div>

          </a>

          <button
            on:click={() => { openMobileMenu = !openMobileMenu }}
            class="active:scale-90 transition-all duration-300"
          >
            <Fa icon={openMobileMenu ? faXmark : faBars} class="text-2xl text-white" />
          </button>

        </div>

        {#if openMobileMenu}
          <div class="w-full flex flex-col py-6 gap-6">
            <BarButton value="acceuil" isMobile={true} bind:close={openMobileMenu} />

            <BarButton value="reservations" isMobile={true} bind:close={openMobileMenu} />
            <BarButton value="boutique" isMobile={true} bind:close={openMobileMenu} />
            <BarButton value="panier" isMobile={true} bind:close={openMobileMenu} />
          </div>

        {/if}

      </div>

    </div>

    {#if openMobileMenu}
      <button
        on:click={() => { openMobileMenu = false }}
        class="fixed top-0 bottom-0 right-0 left-0 z-40 bg-black/60"
      />
    {/if}

  <!-- {/if} -->

</div>

<slot />

<svelte:window bind:innerWidth={width} bind:scrollY={scrollY} />

<style>

  @import url('https://fonts.cdnfonts.com/css/made-dillan');

  .titleFont {
    font-family: 'MADE Dillan', sans-serif;
  }

</style>
