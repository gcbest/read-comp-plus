<script>
  import { isReviewAreaVisible } from '../stores';
</script>

<style>
  .input {
    @apply bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal;
  }
</style>

{#if $isReviewAreaVisible}
  <section>
    <label for="title" />
    <input
      name="title"
      class="input focus:outline-none focus:shadow-outline"
      type="text" />
    <label for="main-takeaway" />
    <textarea
      name="main-takeaway"
      class="focus:outline-none focus:shadow-outline"
      id=""
      cols="30"
      rows="10"
      placeholder="What is the main takeaway from the reading?" />
  </section>
{/if}
