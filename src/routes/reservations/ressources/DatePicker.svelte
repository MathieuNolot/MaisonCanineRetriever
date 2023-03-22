<script lang="ts">

  import { scale } from 'svelte/transition';

  import { DatePicker, localeFromDateFnsLocale } from 'date-picker-svelte';
  import { fr } from 'date-fns/locale'

  let locale = localeFromDateFnsLocale(fr)

  export let show: boolean;
  export let date: Date;

</script>

{#if show}
  <div
    transition:scale={{duration: 300}}
    class="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center bg-neutral-50"
  >

    <DatePicker
      bind:value={date}
      min={new Date()}
      {locale}
    />

    <button
      on:click={() => { show = false }}
      class="bg-indigo-400 px-3 py-2 rounded-md text-white mt-4 font-semibold md:hover:scale-105 active:scale-90 transition-all duration-150 select-none"
    >
      Valider
    </button>

  </div>
{/if}
