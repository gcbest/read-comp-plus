<script lang="ts">
  import Tailwind from './Tailwind.svelte';
  import Button from './components/Button.svelte';
  import TextArea from './components/TextArea.svelte';

  const body: HTMLElement = window.document.body;
  const theme: string | undefined = localStorage.getItem('theme');
  let text: string | undefined = '';
  if (theme) body.classList.add('dark-mode');
</script>

<style lang="scss">
  main {
    h1 {
      font-size: 2rem;
    }
  }

  // LIGHT THEME
  :global(body) {
    background-color: #d7d6d6;
    color: #1d3557;
    transition: background-color 0.5s;
  }

  // DARK THEME
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }
</style>

<Tailwind />
<main>
  <h1 class="text-red-400">The rest of our app will be here</h1>
  <Button {body} {theme}>Toggle</Button>
  <TextArea {text} />

</main>
