<script lang="ts">
  export let body: HTMLElement;
  export let theme: string | undefined;

  const toggle = () => {
    if (theme) localStorage.removeItem('theme');
    else localStorage.setItem('theme', 'dark');

    body.classList.toggle('dark-mode');
  };
</script>

<style>
  button {
    background-color: #f76027;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
  }
  :global(body.dark-mode) button {
    background-color: #0084f6;
    color: white;
  }
</style>

<button on:click={toggle}>
  <slot />
</button>
