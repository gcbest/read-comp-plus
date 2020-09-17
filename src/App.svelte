<script lang="ts">
  import Tailwind from './Tailwind.svelte';
  import TextArea from './components/TextArea.svelte';
  import Header from './components/Header.svelte';
  import OptionsArea from './components/OptionsArea.svelte';
  import SideNav from './components/SideNav.svelte';
  import ReadingArea from './components/ReadingArea.svelte';
  import ReviewArea from './components/ReviewArea.svelte';
  import SummaryArea from './components/SummaryArea.svelte';
  import URLInputArea from './components/URLInputArea.svelte';
  import { darkMode, theme, body, isReadingAreaVisible } from './stores';

  if (theme) {
    $darkMode = true;
    body.classList.add('dark-mode');
  }
</script>

<style lang="scss">
  :root {
    // LIGHT THEME
    --main-theme-bg: #d7d6d6;
    --main-theme-color: #1d3557;
    --text-options-bg: #457b9d;
    --text-options-color: #382317;
    --side-nav-bg: #a8dadc;

    // DARK THEME
    --dark-theme-bg: #1d3040;
    --dark-theme-color: #bfc2c7;
    --dark-accent-color: #402a1d;
    --dark-side-nav-bg: #71a2c1;
    --dark-side-nav-color: #312f2f;
  }

  // LIGHT THEME
  :global(body) {
    background-color: var(--main-theme-bg);
    color: var(--main-theme-color);
    transition: background-color 0.5s;
  }

  // DARK THEME
  :global(body.dark-mode) {
    background-color: var(--dark-theme-bg);
    color: var(--dark-theme-color);
  }
</style>

<Tailwind />
<main class="px-4 py-3">
  <Header />
  <SideNav />
  <OptionsArea />
  <URLInputArea />
  <TextArea />
  {#if $isReadingAreaVisible}
    <ReadingArea />
  {/if}
  <ReviewArea />
  <SummaryArea />
</main>
