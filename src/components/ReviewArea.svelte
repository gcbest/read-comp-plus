<script>
  import { fade, fly } from 'svelte/transition';
  import {
    isReviewAreaVisible,
    reviewResponses,
    isSummaryAreaVisible,
  } from '../stores';
  import ResponseBox from './ResponseBox.svelte';
  import Button from './Button.svelte';

  const handleClick = () => {
    isSummaryAreaVisible.set(true);
    isReviewAreaVisible.set(false);
  };
</script>

<style>
  .input {
    @apply border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-4/5 m-auto appearance-none leading-normal;
  }

  @media screen and (min-width: 500px) {
    section {
      max-width: 50vw;
    }
  }
</style>

{#if $isReviewAreaVisible}
  <section
    class="flex flex-col justify-evenly align-middle mt-8 mb-2 mx-auto bg-"
    in:fly={{ y: 200, duration: 1000, delay: 500 }}
    out:fade={{ duration: 500 }}>
    <input
      name="title"
      class="input focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="What is the title of the reading?"
      bind:value={$reviewResponses.title} />
    <label for="main-takeaway" />
    <ResponseBox
      name="main-takeaway"
      bind:value={$reviewResponses.mainTakeAway}
      placeholder="What is the main takeaway from this reading?" />
    <ResponseBox
      name="use-case"
      bind:value={$reviewResponses.useCase}
      placeholder="What can you use from this reading in your life?" />

    <span class="mt-2 text-center">
      <Button {handleClick} blue={true}>Done</Button>
    </span>
  </section>
{/if}
