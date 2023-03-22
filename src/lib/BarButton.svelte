<script lang="ts">

  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faHouse, faDog, faShop, faCartShopping } from '@fortawesome/free-solid-svg-icons';  // faPaw

  export let value: string;
  export let isMobile: boolean;
  export let isMobilePWA: boolean = false;
  export let close: boolean;

  $: isSelected = $page.route.id === `/${value === 'acceuil' ? '' : value}`;
  $: icon = value === 'boutique' ? faShop : value === 'acceuil' ? faHouse : value === 'panier' ? faCartShopping : faDog

  function press() {
    close = false;
    goto(`/${value === 'acceuil' ? '' : value}`);
  }

</script>

<button
  on:click={press}
  class="
    {isSelected ? '' : 'md:hover:scale-105 active:scale-90'}
    text-lg font-semibold
    flex items-center gap-3
    {isSelected ? 'text-neutral-400' : 'text-white md:hover:text-indigo-400'}
    transition-all duration-150
    {isMobilePWA ? 'w-full h-full flex items-center justify-center' : ''}
  "
>
  <Fa icon={icon} />

  {#if !isMobilePWA && (isMobile || value !== 'panier')}
    {value.charAt(0).toUpperCase() + value.slice(1)}
  {/if}

</button>
