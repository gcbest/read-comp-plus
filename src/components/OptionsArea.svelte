<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { TEXT_OPTIONS } from '../const';
  import {
    isOptionsAreaVisible,
    isTextAreaVisible,
    isURLAreaVisible,
  } from '../stores';
  import OptionBtn from './OptionBtn.svelte';

  const handleTextClick = () => {
    isURLAreaVisible.set(false);
    isTextAreaVisible.set(true);
  };

  const handleURLClick = () => {
    isTextAreaVisible.set(false);
    setTimeout(() => isURLAreaVisible.set(true), 300);
  };
</script>

{#if $isOptionsAreaVisible}
  <section in:fly={{ y: 200, duration: 1000 }} out:fade>
    <p class="text-center my-3">Hello and Welcome to Read Comp+!</p>
    <div class="flex justify-evenly my-6">
      <OptionBtn handleClick={handleTextClick} type={TEXT_OPTIONS.TEXT}>
        Text
      </OptionBtn>
      <OptionBtn handleClick={handleURLClick} type={TEXT_OPTIONS.URL}>
        URL
      </OptionBtn>
    </div>
  </section>
{/if}
