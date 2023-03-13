<script>

  import "../app.css";

  import "../lib/BarButton.svelte"
	import BarButton from "../lib/BarButton.svelte";

  export const ssr = false;

</script>

<div class="flex flex-col">

  <div class="flex items-center justify-center fixed bottom-0 md:bottom-auto md:top-0 left-0 right-0 z-50 bg-neutral-100 shadow-md">

    <div class="flex items-center justify-between w-full px-8 py-5">

      <BarButton value="acceuil" />

      <div class="
        flex items-center justify-end gap-12
      "
      >

        <BarButton value="reservations" />
        <BarButton value="boutique" />
        <BarButton value="panier" />

      </div>

    </div>

  </div>

  <slot />

</div>
