<script>
  import { fade, fly } from 'svelte/transition';
  import {
    isReadingAreaVisible,
    isReviewAreaVisible,
    isReadingDoneAreaVisible,
  } from '../stores';
  import ScrollText from './ScrollText.svelte';
  import Button from './Button.svelte';
  import { togglePause } from '../utils';

  const pause = () => {
    const textP = document.querySelector('.scroll-up p');
    const pauseBtn = document.querySelector('.yellow');
    const { animationPlayState: currentPlayState } = textP.style;
    textP.style.animationPlayState = togglePause(currentPlayState); // updated play state
    pauseBtn.textContent =
      textP.style.animationPlayState === 'paused' ? 'Resume' : 'Pause';
  };

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
      in:fly={{ y: 200, duration: 750, delay: 750 }} />
    <ScrollText />

    <div class="flex justify-evenly mt-8">
      {#if $isReadingDoneAreaVisible}
        <Button handleClick={reRead} green={true}>Re-read</Button>
        <Button handleClick={review} blue={true}>Done</Button>
      {:else}
        <Button handleClick={pause} yellow={true}>Pause</Button>
      {/if}
    </div>
  </section>
{/if}
