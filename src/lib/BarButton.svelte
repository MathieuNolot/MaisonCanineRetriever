<script lang="ts">

  import { page } from "$app/stores";

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faHouse, faDog, faShop, faCartShopping } from '@fortawesome/free-solid-svg-icons';  // faPaw

  export let value: string;

  $: isSelected = $page.route.id === `/${value === 'acceuil' ? '' : value}`;
  $: icon = value === 'boutique' ? faShop : value === 'acceuil' ? faHouse : value === 'panier' ? faCartShopping : faDog

</script>

<a href="/{value === 'acceuil' ? '' : value}" class="
  text-lg font-semibold
  flex items-center gap-3
  {isSelected ? 'text-black' : 'text-neutral-400 hover:text-neutral-300'}
  transition-all duration-150
"
>
  <Fa icon={icon} />

  {#if value !== 'panier'}
    <h1 class="opacity-0 w-0 h-0 md:opacity-100 md:w-fit md:h-fit">
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </h1>
  {/if}

</a>
