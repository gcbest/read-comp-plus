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
  /* DARK THEME */
  :global(body.dark-mode) header {
    @apply text-red-400;
  }
</style>

<nav class="flex justify-between items-center">

  <header class="text-blue-500 text-2xl text-center m-auto">Read Comp +</header>
  <ul class="flex justify-between items-center">
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
