<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import {
    isOptionsAreaVisible,
    isTextAreaVisible,
    isURLAreaVisible,
  } from '../stores';
  import OptionBtn from './OptionBtn.svelte';

  const handleTextClick = () => isTextAreaVisible.set(true);
  const handleURLClick = () => isURLAreaVisible.set(true);
</script>

{#if $isOptionsAreaVisible}
  <section class="my-3" in:fly={{ y: 200, duration: 1000 }} out:fade>
    <p class="text-center my-3">Hello and Welcome to Read Comp+!</p>
    <div class="flex justify-evenly">
      <OptionBtn handleClick={handleTextClick}>Text</OptionBtn>
      <OptionBtn handleClick={handleURLClick}>URL</OptionBtn>
    </div>
  </section>
{/if}
