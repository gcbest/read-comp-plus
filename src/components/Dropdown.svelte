<script lang="ts">
  import { COLORS, FONTS } from '../const';
  import { color, font } from '../stores';
  export let title: string;
  export let options: string[];

  const showStyle = (attr: string): string => {
    switch (title) {
      case 'Color':
        return `color:${COLORS[attr]}`;
      case 'Font':
        return `font-family:${FONTS[attr]}`;
    }
  };

  const styleTitle = (): string => {
    switch (title) {
      case 'Color':
        return `color:${COLORS[$color]}`;
      case 'Font':
        return `font-family:${FONTS[$font]}`;
    }
  };

  let titleStyle = styleTitle();

  const selectOption = (event) => {
    const value = event.target.textContent.trim();
    localStorage.setItem(title.toLocaleLowerCase(), value);

    switch (title) {
      case 'Color':
        color.set(value);
        break;
      case 'Font':
        font.set(value);
        break;
    }
    titleStyle = styleTitle();
  };
</script>

<style>
  .dropdown:hover .dropdown-menu {
    display: block;
    z-index: 2;
  }

  ul li:not(:first-child):not(:last-child) {
    @apply bg-gray-200 py-2 px-4 block whitespace-no-wrap border-solid border-gray-500 border-b;
  }

  ul li:first-child {
    @apply rounded-t border-solid border-gray-500 border-b  bg-gray-200 py-2 px-4 block whitespace-no-wrap;
  }

  ul li:last-child {
    @apply rounded-b bg-gray-200 py-2 px-4 block whitespace-no-wrap;
  }
</style>

<div class="dropdown inline-block relative">
  <button
    class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex
      items-center">
    <span class="mr-1" style={titleStyle}>{title}</span>
  </button>
  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
    {#each options as opt}
      <li
        class="border-solid cursor-pointer opts"
        on:click={selectOption}
        style={showStyle(opt)}>
        {opt}
      </li>
    {/each}
  </ul>
</div>
