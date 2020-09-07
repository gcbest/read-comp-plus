<script>
  import { fade, fly } from 'svelte/transition';
  import Button from './Button.svelte';
  import { isSummaryAreaVisible, reviewResponses } from '../stores';
  import { reset } from '../utils';

  const handleClick = () => reset();
</script>

<style>
  h3 {
    @apply font-bold my-4;
  }

  p {
    @apply my-2;
  }
</style>

{#if $isSummaryAreaVisible}
  <section
    class="mt-8 w-2/3 mx-auto text-center"
    in:fly={{ y: 200, duration: 1000, delay: 500 }}
    out:fade={{ duration: 500 }}>
    <span class="font-bold text-xl">Title: </span><span class="semi-bold text-xl">{$reviewResponses.title} </span>
    <h3>Main Takeaway:</h3>
    <p>{$reviewResponses.mainTakeAway}</p>
    <h3>Uses:</h3>
    <p>{$reviewResponses.useCase}</p>
    <div class="mt-8 text-center">
      <Button {handleClick} green={true}>New Reading</Button>
    </div>
  </section>
{/if}
