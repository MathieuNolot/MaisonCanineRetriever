<script lang="ts">

  export let isMobile: boolean;

  import Mobile from "./Ressources/Mobile.svelte";
  import Desktop from "./Ressources/Desktop.svelte";

</script>

<!-- {#if isMobile}
  <Mobile />
{:else} -->
  <Desktop />
<!-- {/if} -->
