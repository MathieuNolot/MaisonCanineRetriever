<script lang="ts">

  export let open: boolean;
  export let date: Date;
  export let label: string;

</script>

<div class="flex items-center gap-3">
  <div class="text-lg font-semibold">
    {label} le
  </div>

  <button
    on:click={() => { open = true }}
    class="text-lg font-semibold bg-neutral-50 p-2 shadow-lg rounded-md md:hover:scale-105 active:scale-90 transition-all duration-150 select-none"
  >
    {date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
  </button>
</div>
