<script>
  import { fade, fly } from 'svelte/transition';
  import { isReadingAreaVisible, text, font, color, size } from '../stores';
  import ScrollText from './ScrollText.svelte';
</script>

<style>
  section {
    width: 85%;
    margin: 2rem auto;
  }

  .overlay {
    position: absolute; /* Sit on top of the page content */
    display: block; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
  }
</style>

{#if $isReadingAreaVisible}
  <section
    class="relative"
    in:fly={{ y: 200, duration: 1000, delay: 500 }}
    out:fade>
    <div class="overlay rounded" />
    <p style="font-family: {$font}; color: {$color}; font-size: {$size}px;">
      <ScrollText />
    </p>
  </section>
{/if}
