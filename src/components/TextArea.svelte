<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  export let text: string;
  export let visible: boolean;
</script>

<style>
  textarea {
    width: 85%;
    margin: auto;
    display: block;
    background-color: #f5f5f5;
  }

  :global(body.dark-mode) textarea {
    background-color: #457b9d;
    color: #f1faee;
  }
</style>

{#if visible}

  <textarea
    in:fly={{ y: 200, duration: 2000 }}
    out:fade
    class="resize-y"
    name="content"
    cols="30"
    rows="10">
    {text}
  </textarea>
{/if}
