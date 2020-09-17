<script lang="ts">
  import ToggleDarkMode from './ToggleDarkMode.svelte';

  import { open } from '../stores';

  const openNav = () => open.set(true);
</script>

<style>
  a {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-decoration: none;
  }

  li {
    margin: 0 1rem;
  }

  button {
    @apply px-2 pt-2 border border-blue-500 rounded inline-block align-middle;
  }

  ul {
    @apply absolute top-0 right-0 flex justify-between items-center p-2;
  }

  /* MOBILE VIEW */
  @media only screen and (max-width: 600px) {
    ul {
      padding: 0;
    }

    .darkModeBtn {
      display: none;
    }

    .settings {
      border: none;
    }
  }

  /* DARK THEME */
  :global(body.dark-mode) header {
    @apply text-red-400;
  }
</style>

<nav class="relative">
  <header id="myHeader" class="text-blue-500 text-2xl text-center m-auto">
    <a class="font-semibold" href="/"> Read Comp+ </a>
  </header>
  <ul>
    <li class="darkModeBtn">
      <ToggleDarkMode />
    </li>
    <li>
      <button class="settings" on:click={openNav}>
        <span
          id="settings-icon"
          class="material-icons cursor-pointer">settings</span>
      </button>
    </li>
  </ul>
</nav>
