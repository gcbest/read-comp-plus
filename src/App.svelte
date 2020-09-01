<script lang="ts">
  import Tailwind from './Tailwind.svelte';
  import Button from './components/Button.svelte';
  import TextArea from './components/TextArea.svelte';
  import Header from './components/Header.svelte';
  import OptionsArea from './components/OptionsArea.svelte';
  import SideNav from './components/SideNav.svelte';

  const body: HTMLElement = window.document.body;
  const theme: string | undefined = localStorage.getItem('theme');
  let text: string | undefined = '';

  let isTextAreaVisible: boolean = false;

  if (theme) body.classList.add('dark-mode');
</script>

<style lang="scss">
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

  main {
    transition: margin-left 0.5s;
    padding: 1rem;
  }
</style>

<Tailwind />
<main>
  <Header />
  <Button {body} {theme}>Toggle</Button>
  <SideNav />
  <!-- <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={toggleTextArea}>
    Show text
  </button> -->
  <OptionsArea bind:visible={isTextAreaVisible} />
  <TextArea {text} {isTextAreaVisible} />
</main>
