<script lang="ts">
  import ToggleDarkMode from './ToggleDarkMode.svelte';

  export let body: HTMLElement;
  export let theme: string | undefined;
  export let darkMode: boolean | undefined;

  const openNav = () => {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  };
</script>

<style>
  li {
    margin: 0 1rem;
  }

  /* DARK THEME */
  :global(body.dark-mode) header {
    @apply text-red-400;
  }
</style>

<nav class="relative">
  <header class="text-blue-500 text-2xl text-center m-auto">Read Comp +</header>
  <ul class="absolute top-0 right-0 flex justify-between items-center p-2">
    <li>
      <ToggleDarkMode {body} {theme} bind:darkMode />
    </li>
    <li>
      <span class="material-icons cursor-pointer" on:click={openNav}>
        settings
      </span>

    </li>
  </ul>
</nav>
