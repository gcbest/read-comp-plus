<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import {
    isReadingAreaVisible,
    isReviewAreaVisible,
    isReadingDoneAreaVisible,
    wpm,
    text,
    animationTime,
    pauseBtnText,
  } from '../stores';
  import ScrollText from './ScrollText.svelte';
  import Button from './Button.svelte';
  import { pause, updateTime } from '../utils';

  let isSpeedVisible = false;

  updateTime($wpm, $text);

  const showSpeed = () => (isSpeedVisible = true);

  const reRead = () => {
    isReadingAreaVisible.set(false);
    setTimeout(() => {
      isReadingDoneAreaVisible.set(false);
      isSpeedVisible = false;
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

  @media only screen and (max-width: 600px) {
    .re-read {
      display: none;
    }

    .btn-group {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>

<section
  class="relative"
  in:fly={{ y: 200, duration: 750, delay: 500 }}
  out:fade={{ duration: 500 }}>
  <div
    class="overlay rounded"
    on:click={pause}
    in:fly={{ y: 200, duration: 750, delay: 750 }} />
  <ScrollText time={$animationTime} />

  <div>
    {#if $isReadingDoneAreaVisible}
      <div
        class="flex justify-evenly my-8 btn-group"
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 300 }}>
        <Button handleClick={reRead} green={true}>Re-read</Button>
        <Button handleClick={review} blue={true}>Done</Button>
      </div>
    {:else}
      <div
        class="flex justify-evenly my-8 btn-group"
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 300 }}>
        <Button handleClick={pause} yellow={true}>{$pauseBtnText}</Button>

        <span class="re-read">
          <Button handleClick={reRead} green={true}>Re-read</Button>
        </span>

        {#if isSpeedVisible}
          <span class="text-center">
            <label for="wpm-adjust">Current Speed: {$wpm} WPM</label>
            <input
              class="bg-gray-300 h-8 rounded cursor-pointer"
              on:change={() => updateTime($wpm, $text)}
              bind:value={$wpm}
              type="range"
              name="wpm-adjust"
              min="10"
              max="2000" />
          </span>
        {:else}
          <Button handleClick={showSpeed} purple={true}>Adjust Speed</Button>
        {/if}
      </div>
    {/if}
  </div>
</section>
