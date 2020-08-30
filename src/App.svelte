<script lang="ts">
  import Tailwind from './Tailwind.svelte';
  import Button from './components/Button.svelte';

  const body: HTMLElement = window.document.body;
  const theme: string | undefined = localStorage.getItem('theme');

  if (theme) body.classList.add('dark-mode');
</script>

<style lang="scss">
  main {
    h1 {
      font-size: 2rem;
    }
  }

  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
    transition: background-color 0.5s;
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }
</style>

<Tailwind />
<main>
  <h1 class="text-red-400">The rest of our app will be here</h1>
  <Button {body} {theme}>Toggle</Button>

</main>
