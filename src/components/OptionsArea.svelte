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
      <header transition:slide={{ duration: 1000 }}>
        <p class="text-center text-xl font-bold my-3">
          Hello and Welcome to Read Comp+!
        </p>
        <p class="max-w-2xl text-center mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          aspernatur voluptate doloremque quia delectus numquam repudiandae
          alias dolorem! Vel ipsum facilis ratione nihil repudiandae consequatur
          aliquid? Harum repudiandae excepturi veritatis!
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
