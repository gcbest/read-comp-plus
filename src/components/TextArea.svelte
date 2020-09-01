<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  export let isTextAreaVisible: boolean;
  let text: string;
  const placeholder: string =
    'To get started, just copy and paste text that you would like to read in this text box.';
</script>

<style>
  textarea {
    width: 85%;
    margin: auto;
    display: block;
    background-color: #f5f5f5;
    color: red;
  }

  :global(body.dark-mode) textarea {
    background-color: #457b9d;
    color: #f1faee;
  }
</style>

{#if isTextAreaVisible}

  <textarea
    in:fly={{ y: 200, duration: 1000 }}
    out:fade
    class="resize-y"
    name="content"
    cols="30"
    rows="10">
    {text ? text : placeholder}
  </textarea>
{/if}
