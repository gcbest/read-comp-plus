<script>
  import { fade, fly } from 'svelte/transition';
  import { isReviewAreaVisible, reviewResponses } from '../stores';
</script>

<style>
  .input {
    @apply bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal;
  }

  @media screen and (min-width: 500px) {
    section {
      max-width: 50vw;
    }
  }
</style>

{#if $isReviewAreaVisible}
  <section
    class="flex flex-col justify-evenly align-middle mt-8 mx-auto"
    in:fly={{ y: 200, duration: 1000, delay: 500 }}
    out:fade={{ duration: 500 }}>
    <label for="title" />
    <input
      name="title"
      class="input focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="What is the title of the reading?"
      bind:value={$reviewResponses.title} />
    <label for="main-takeaway" />
    <textarea
      name="main-takeaway"
      class="focus:outline-none focus:shadow-outline my-4 p-4 rounded"
      id=""
      cols="30"
      rows="10"
      placeholder="What is the main takeaway from this reading?"
      bind:value={$reviewResponses.mainTakeAway} />
  </section>
{/if}
