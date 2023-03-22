<script lang="ts">

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDog, faXmark } from '@fortawesome/free-solid-svg-icons';

  import type { Dog } from '../../../lib/Interfaces/Dog';

  import DogSelector from './DogSelector.svelte';

  export let dogs: Dog[];

</script>

<div class="w-11/12 md:w-full flex flex-col items-center justify-center {dogs.length > 0 ? 'pb-6' : 'pb-2'}">

  <div class="text-lg font-semibold w-full pb-2">
    {dogs.length > 1 ? `Mes ${dogs.length} chiens:` : 'Mon chien:'}
  </div>

  <div class="flex flex-col items-center w-full gap-1 px-1">
    {#each dogs as dog, index}

      {#if index != 0}
        <div class="w-6/12 h-[1px] bg-neutral-200"></div>
      {/if}

      <div class="flex gap-2 items-center justify-between w-full h-11">

        <div class="flex gap-3 items-center">
          <div class="w-6 flex items-center justify-center">
            <Fa icon={faDog} class="{dog.moreThan20Kg ? 'text-xl' : 'text-sm'}" />
          </div>

          <div class="text-lg font-semibold">
            {dog.name}
          </div>
        </div>

        <div class="font-medium">
          {dog.moreThan20Kg ? '25' : '20'}€ / jour
        </div>

        <button
          on:click={() => { dogs = dogs.filter(x => x != dog ) }}
          class=""
        >
          <Fa icon={faXmark} />
        </button>
      </div>

    {/each}

    <div class="w-10/12 h-[1px] bg-neutral-200 my-[1px]"></div>

    <DogSelector
      bind:dogs
    />

  </div>

</div>
