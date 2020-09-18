<script lang="ts">
  import { fade, fly, slide } from 'svelte/transition';
  import { TEXT_OPTIONS } from '../const';
  import {
    isOptionsAreaVisible,
    isTextAreaVisible,
    isURLAreaVisible,
  } from '../stores';
  import OptionBtn from './OptionBtn.svelte';

  let isDescriptionVisible = true;

  const handleTextClick = () => {
    isDescriptionVisible = false;
    isURLAreaVisible.set(false);
    isTextAreaVisible.set(true);
  };

  const handleURLClick = () => {
    isDescriptionVisible = false;
    isTextAreaVisible.set(false);
    setTimeout(() => isURLAreaVisible.set(true), 300);
  };
</script>

{#if $isOptionsAreaVisible}
  <section in:fly={{ y: 200, duration: 1000 }} out:fade>
    {#if isDescriptionVisible}
      <header data-testid="description" transition:slide={{ duration: 1000 }}>
        <p class="text-center text-xl font-bold my-3">
          Hello and Welcome to Read Comp+!
        </p>
        <p class="max-w-2xl text-center mx-auto">
          Your #1 destination for increasing your reading speed and
          comprehension! Choose between copying and pasting your own block of
          text vs linking to a webpage with an article. In the settings menu,
          you can determine how fast you would like to read (words per minute).
          You can also choose your text size, font, and color.
        </p>
      </header>
    {/if}
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
