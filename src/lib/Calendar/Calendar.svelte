<script lang="ts">

  import { startOfMonth, endOfMonth, eachDayOfInterval, format, addMonths } from "date-fns";
  import { fr } from 'date-fns/esm/locale';

  import Fa from 'svelte-fa/src/fa.svelte';
  import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';  // faPaw

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  export let selectedDates: string[];

  function dateToString(date: Date) {
    const day = date.getDate().toLocaleString('fr-FR', { minimumIntegerDigits: 2, useGrouping: false })
    const month = (date.getMonth() + 1).toLocaleString('fr-FR', { minimumIntegerDigits: 2, useGrouping: false })
    return `${day}/${month}`
  }

  function getMonthDays(month: number, year: number) {
    const start = startOfMonth(new Date(year, month));
    const end = endOfMonth(new Date(year, month));
    return eachDayOfInterval({ start, end });
  }

  function changeMonth(increment: number) {
    currentDate = addMonths(currentDate, increment);
    currentMonth = currentDate.getMonth();
    currentYear = currentDate.getFullYear();
  }

  function toggleDate(date: Date) {
    if (isInPast(date)) return;

    const stringDate = dateToString(date);

    if (selectedDates.includes(stringDate)) selectedDates = selectedDates.filter(x => x !== stringDate)
    else selectedDates = [...selectedDates, stringDate]
  }

  function getDayIndex(date: Date) {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
  }

  function isInPast(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }

  $: days = getMonthDays(currentMonth, currentYear);

  const weekdays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

</script>

<div class="w-full flex flex-col items-center select-none h-full bg-[#FE352A] rounded-lg shadow-lg overflow-clip">
  <div class="w-full flex justify-between items-center py-3 shadow-lg text-white font-semibold text-lg">

    <button
      on:click={() => changeMonth(-1)}
      class="cursor-pointer w-14 flex items-center justify-center md:hover:scale-105 active:scale-90 transition-all duration-150"
    >
      <Fa icon={faChevronLeft} />
    </button>

    <span>{format(currentDate, "MMMM yyyy", {locale: fr})}</span>

    <button
      on:click={() => changeMonth(1)}
      class="cursor-pointer w-14 flex items-center justify-center md:hover:scale-105 active:scale-90 transition-all duration-150"
    >
      <Fa icon={faChevronRight} />
    </button>

  </div>

  <div class="grid grid-cols-7 w-full gap-[2px] bg-neutral-200">
    {#each weekdays as weekday}
      <div class="flex items-center justify-center bg-white text-slate-900 font-semibold py-1">
        {weekday}
      </div>
    {/each}
  </div>

  <div class="grid grid-cols-7 gap-[2px] w-full h-full bg-neutral-200">
    {#each Array(getDayIndex(days[0])).fill(null) as _, index}
      <div class="
        flex items-center justify-center w-full h-full
        bg-transparent cursor-default
      "></div>
    {/each}

    {#each days as day (day)}
      <button
        class="
          flex items-center justify-center w-full h-full cursor-pointer font-semibold rounded-sm
          {isInPast(day) ?
            'bg-transparent cursor-not-allowed text-neutral-300'
            : selectedDates.includes(dateToString(day))
            ? 'bg-indigo-400 text-white'
            : 'bg-neutral-100'
          }
        "
        on:click={() => toggleDate(day)}
      >
        {format(day, "d", {locale: fr})}
      </button>
    {/each}
  </div>
</div>
