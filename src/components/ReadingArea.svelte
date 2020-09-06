<script>
  import { fade, fly } from 'svelte/transition';
  import {
    isReadingAreaVisible,
    isReviewAreaVisible,
    isReadingDoneAreaVisible,
  } from '../stores';
  import ScrollText from './ScrollText.svelte';
  import Button from './Button.svelte';

  const reRead = () => {
    isReadingAreaVisible.set(false);
    isReadingDoneAreaVisible.set(false);
    setTimeout(() => {
      isReadingAreaVisible.set(true);
    }, 600);
  };

  const review = () => {
    isReadingAreaVisible.set(false);
    isReviewAreaVisible.set(true);
  };
</script>

<style>
  section {
    width: 85%;
    height: 80vh;
    margin: 2rem auto;
  }

  .overlay {
    position: absolute; /* Sit on top of the page content */
    display: block; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 80%; /* Full height (cover the whole page) */
    top: 10%;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  }
</style>

{#if $isReadingAreaVisible}
  <section class="relative" out:fade={{ duration: 500 }}>
    <div
      class="overlay rounded"
      in:fly={{ y: 200, duration: 2000, delay: 1000 }} />
    <ScrollText />
    {#if $isReadingDoneAreaVisible}
      <div class="flex justify-evenly mt-8">
        <Button handleClick={reRead} green={true}>Re-read</Button>
        <Button handleClick={review} blue={true}>Done</Button>
      </div>
    {/if}
  </section>
{/if}
