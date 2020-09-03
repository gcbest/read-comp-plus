<script lang="ts">
  import ToggleDarkMode from './ToggleDarkMode.svelte';

  export let body: HTMLElement;
  export let theme: string | undefined;
  export let darkMode: boolean | undefined;

  const openNav = () => {
    document.getElementById('mySidenav').style.width = '250px';
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
  <!-- <a href="/"> -->
  <header id="myHeader" class="text-blue-500 text-2xl text-center m-auto">
    Read Comp+
  </header>
  <!-- </a> -->
  <ul>
    <li class="darkModeBtn">
      <ToggleDarkMode {body} {theme} bind:darkMode />
    </li>
    <li>
      <button class="settings" on:click={openNav}>
        <span class="material-icons cursor-pointer">settings</span>
      </button>
    </li>
  </ul>
</nav>
