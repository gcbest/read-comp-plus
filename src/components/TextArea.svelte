<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import {
    isTextAreaVisible,
    isOptionsAreaVisible,
    isReadingAreaVisible,
    font,
    color,
    size,
    text,
  } from '../stores';
  import Button from './Button.svelte';

  const placeholder: string =
    'To get started, just copy and paste text that you would like to read in this text box.';

  const handleClick = () => {
    isOptionsAreaVisible.set(false);
    isTextAreaVisible.set(false);
    isReadingAreaVisible.set(true);
  };
</script>

<style>
  textarea {
    width: 85%;
    margin: auto;
    display: block;
    background-color: #f5f5f5;
    max-height: 60vh;
  }

  div {
    text-align: center;
  }

  :global(body.dark-mode) textarea {
    background-color: #457b9d;
    /* color: #f1faee; */
  }
</style>

{#if $isTextAreaVisible}
  <textarea
    style="font-family: {$font}; color: {$color}; font-size: {$size}px;"
    class="resize-y p-4 rounded focus:outline-none focus:shadow-outline"
    in:fly={{ y: 200, duration: 1000, delay: 300 }}
    out:fade={{ duration: 300 }}
    bind:value={$text}
    {placeholder}
    name="content"
    cols="30"
    rows="10" />
  {#if $text.length > 0}
    <div class="pt-5" in:fly={{ y: 200, duration: 1000 }} out:fade>
      <Button {handleClick} green={true}>Begin</Button>
    </div>
  {/if}
{/if}
