<script lang="ts">

  import FirstSection from "../lib/homePage/firstSection/firstSection.svelte";

  let width: number;

  $: isMobile = width < 768

</script>

<main class="topSafeMargin">

  <FirstSection isMobile={isMobile} />

  <div class="flex items-center justify-evenly center contentHeight w-screen relative subpixel-antialiased bg-neutral-50 -translate-y-[1px]">
    <h1 class="text-3xl font-semibold bg-slate-800 h-full flex flex-col lg:flex-row items-center justify-evenly p-8 text-center w-full overflow-clip">

      <div class="w-[96%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-1/3 flex flex-col gap-3 transition-all duration-300">

        <img
          class="aspect-square rounded-xl shadow-xl"
          src="jason.webp"
          alt="Jason"
        />

        <div class="
          text-neutral-400
          text-center
          text-xs
          sm:text-md
          md:text-lg
          lg:text-xl
        ">
          Jason Menier, votre gérant dévoué et passionné chez Maison Canine Retriever.
        </div>

      </div>

      <div
        class="
          text-center w-full lg:w-1/2 text-white textFont flex flex-col gap-4 lg:gap-8 transition-all duration-300
          text-xl
          sm:text-xl
          md:text-2xl
          lg:text-4xl
        "
      >

        <div>Avec un sourire chaleureux et un cœur plein d'amour pour nos invités à fourrure, je m'engage à créer une expérience de chez-soi sûre, confortable et engageante.</div>
        <div>Rassurez-vous, vos animaux de compagnie bien-aimés sont entre des mains attentionnées et expérimentées.</div>

        <div class="
          text-center pt-6
          text-2xl
          sm:text-2xl
          md:text-3xl
          lg:text-5xl
        ">
          Bienvenue dans notre famille !
        </div>

      </div>

    </h1>
  </div>

  <div class="flex items-center justify-evenly center contentHeight w-screen relative subpixel-antialiased bg-neutral-50">
    <h1 class="text-3xl font-semibold bg-rose-100 h-full flex items-center justify-center p-8 text-center w-full">
      Présentation de la pension
    </h1>
  </div>

  <div class="flex items-center justify-evenly center contentHeight w-screen relative subpixel-antialiased bg-neutral-50">
    <h1 class="text-3xl font-semibold bg-fuchsia-100 h-full flex items-center justify-center p-8 text-center w-full">
      Gallerie de chiens
    </h1>
  </div>

</main>

<svelte:window bind:innerWidth={width} />

<style>
  @import url('https://fonts.cdnfonts.com/css/made-mirage');

  .textFont {
    font-family: 'MADE Mirage', sans-serif;
  }

</style>
