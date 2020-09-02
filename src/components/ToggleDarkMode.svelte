<script lang="ts">
  export let body: HTMLElement;
  export let theme: string | undefined;
  export let darkMode: boolean | undefined;

  const updateLocalStorage = () => {
    if (theme) localStorage.removeItem('theme');
    else localStorage.setItem('theme', 'dark');
  };

  const toggle = () => {
    updateLocalStorage();
    darkMode = !darkMode;
    body.classList.toggle('dark-mode');
  };
</script>

<style>
  /* .btn {
    @apply font-bold py-2 px-4 rounded;
    text-transform: uppercase;
  }

  .btn-blue {
    @apply bg-blue-500 text-white;
  }

  .btn-blue:hover {
    @apply bg-blue-700;
  } */
  button {
    @apply px-2 pt-2 border border-blue-500 rounded inline-block align-middle;
  }

  :global(body.dark-mode) button {
    background-color: #0084f6;
    color: white;
  }
</style>

<!-- <button class="btn btn-blue" on:click={toggle}> -->
{#if darkMode}
  <button on:click={toggle}>
    <span class="material-icons cursor-pointer">wb_sunny</span>
  </button>
{:else}
  <button on:click={toggle}>
    <span class="material-icons cursor-pointer">brightness_2</span>
  </button>
{/if}

<!-- <slot /> -->
<!-- </button> -->
