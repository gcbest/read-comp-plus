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

  :global(a:hover) {
    text-decoration: none;
  }

  button {
    @apply px-2 pt-2 border border-blue-500 rounded inline-block align-middle;
  }

  /* DARK THEME */
  :global(body.dark-mode) header {
    @apply text-red-400;
  }
</style>

<nav class="relative">
  <a href="/">
    <header class="text-blue-500 text-2xl text-center m-auto">
      Read Comp+
    </header>
  </a>
  <ul class="absolute top-0 right-0 flex justify-between items-center p-2">
    <li>
      <button>
        <ToggleDarkMode {body} {theme} bind:darkMode />
      </button>
    </li>
    <li>
      <button>
        <span class="material-icons cursor-pointer" on:click={openNav}>
          settings
        </span>
      </button>

    </li>
  </ul>
</nav>
