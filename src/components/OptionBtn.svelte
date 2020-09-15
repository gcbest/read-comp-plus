<script lang="ts">
  import { TEXT_OPTIONS } from '../const';
  import { isTextAreaVisible } from '../stores';

  export let handleClick: () => void;
  export let type: TEXT_OPTIONS;
</script>

<style>
  .btn {
    @apply font-bold px-12 py-12 rounded bg-teal-400 flex justify-center align-middle;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>

<button class="btn" on:click={handleClick}>
  <span>
    <slot />
  </span>
  {#if type === TEXT_OPTIONS.TEXT}
    <span class="material-icons"> subject </span>
  {:else}<span class="material-icons"> web </span>{/if}
</button>
