<script lang="ts">
  import { darkMode, body, color } from '../stores';

  const updateLocalStorage = (darkTheme: boolean) => {
    if (darkTheme) localStorage.setItem('theme', 'dark');
    else localStorage.removeItem('theme');
  };

  // does not update your chosen color in localStorage however
  const updateColor = (darkTheme: boolean) =>
    darkTheme ? color.set('white') : color.set('black');

  const toggle = () => {
    $darkMode = !$darkMode;
    updateColor($darkMode);
    updateLocalStorage($darkMode);
    body.classList.toggle('dark-mode');
  };
</script>

<style>
  button {
    @apply px-2 pt-2 border border-blue-500 rounded inline-block align-middle;
  }

  body.dark-mode button {
    background-color: #0084f6;
    color: white;
  }
</style>

{#if $darkMode}
  <button class="toggle-dark-btn" on:click={toggle}>
    <span class="material-icons cursor-pointer toggle-dark-icon">wb_sunny</span>
  </button>
{:else}
  <button class="toggle-dark-btn" on:click={toggle}>
    <span
      class="material-icons cursor-pointer toggle-dark-icon">brightness_2</span>
  </button>
{/if}
