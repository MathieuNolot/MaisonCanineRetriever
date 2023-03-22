<script lang="ts">

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDog, faWeightScale, faPlusCircle, faMinus, faPlus, faD } from '@fortawesome/free-solid-svg-icons';  // faPaw

  import type { Dog } from '../../../lib/Interfaces/Dog';

  export let dogs: Dog[];
  let name = '';

  let moreThan20Kg: boolean = true;

  function pressAdd() {
    if (name.length == 0) return

    dogs = [...dogs, { name, moreThan20Kg }]
    name = "";
  }

</script>

<div class="w-full flex flex-col items-center select-none py-[2px]">
  <div class="flex items-center justify-between w-full h-11">

    <!-- <div class="flex flex-col items-start gap-1 w-3/6"> -->

      <!-- <div class="text-lg font-semibold text-neutral-400 pl-2">
        Nom du chien
      </div> -->

      <div class="flex items-center justify-center">
        <div class="w-6 flex items-center justify-center">
          <button
            on:click={() => { moreThan20Kg = !moreThan20Kg }}
            class="flex items-center justify-center"
          >
            <Fa icon={faDog} class="{moreThan20Kg ? 'text-xl' : 'text-sm'}" />
          </button>
        </div>

        <input
          class="text-lg font-semibold outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg h-11 px-3 bg-transparent"
          bind:value={name}
          placeholder="Nom"
        >
      </div>

    <!-- </div> -->

    <!-- <div class="flex flex-col items-center gap-1 w-2/6"> -->

      <!-- <div class="text-lg font-semibold text-neutral-400 pl-2">
        + de 20 Kg
      </div> -->

      <!-- <label class="switch h-11 w-2/6">
        <input type="checkbox" bind:checked={moreThan20Kg} />
        <span class="slider" />
      </label> -->

    <!-- </div> -->

    <!-- <div class="flex flex-col items-end justify-end gap-1 w-1/6"> -->
      <!-- <div class="text-lg font-semibold text-neutral-400 text-opacity-0">
        N
      </div> -->

      <div class="w-7 h-7">
        <button
          on:click={pressAdd}
          class="
            bg-indigo-400 rounded-lg font-semibold text-white flex items-center justify-center w-full h-full
            active:scale-90 transition-all duration-150
          "
        >
          <!-- Ajouter -->
          <Fa icon={faPlus} />
        </button>
      </div>
    <!-- </div> -->

  </div>

</div>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
</style>
