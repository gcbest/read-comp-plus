<script>
  import { isReviewAreaVisible, reviewResponses } from '../stores';
</script>

<style>
  .input {
    @apply bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal;
  }
</style>

{#if $isReviewAreaVisible}
  <section class="flex flex-col justify-evenly align-middle mt-8">
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
      class="focus:outline-none focus:shadow-outline mt-4 p-4 rounded"
      id=""
      cols="30"
      rows="10"
      placeholder="What is the main takeaway from this reading?"
      bind:value={$reviewResponses.mainTakeAway} />
  </section>
{/if}
