<script lang="ts">

  import "../app.css";

  import "../lib/BarButton.svelte"
	import BarButton from "../lib/BarButton.svelte";

  let width: number;

  $: isMobile = width < 768

</script>

<div class="flex flex-col">

  <div class="flex items-center justify-center fixed bottom-0 md:bottom-auto md:top-0 left-0 right-0 z-50 bg-neutral-100 shadow-md bottomSafePadding">

    <div class="flex items-center justify-between w-full px-8 py-5">

      <BarButton value="acceuil" isMobile={isMobile} />

      <div class="
        flex items-center justify-end gap-12
      "
      >

        <BarButton value="reservations" isMobile={isMobile} />
        <BarButton value="boutique" isMobile={isMobile} />
        <BarButton value="panier" isMobile={isMobile} />

      </div>

    </div>

  </div>

  <slot />

</div>

<svelte:window bind:innerWidth={width} />
