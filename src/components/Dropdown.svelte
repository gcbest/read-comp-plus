<script lang="ts">
  export let title: string;
  export let options: string[];
</script>

<style>
  .dropdown:hover .dropdown-menu {
    display: block;
    z-index: 2;
  }

  ul li:not(:first-child):not(:last-child) {
    @apply bg-gray-200 py-2 px-4 block whitespace-no-wrap border-solid border-gray-500 border-t border-b;
  }

  ul li:first-child a {
    @apply rounded-t bg-gray-200 py-2 px-4 block whitespace-no-wrap;
  }

  ul li:last-child a {
    @apply rounded-b bg-gray-200 py-2 px-4 block whitespace-no-wrap;
  }
</style>

<div class="dropdown inline-block relative">
  <button
    class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex
      items-center">
    <span class="mr-1">{title}</span>
  </button>
  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
    {#each options as opt}
      <li class="border-solid"><a href="#">{opt}</a></li>
    {/each}
  </ul>
</div>
