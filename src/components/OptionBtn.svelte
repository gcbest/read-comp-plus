<script lang="ts">
  import { TEXT_OPTIONS } from '../const';
  import { isTextAreaVisible } from '../stores';

  export let handleClick: () => void;
  export let type: TEXT_OPTIONS;
</script>

<style>
  .btn {
    @apply font-bold px-10 py-10 rounded flex justify-center align-middle border-none;
    color: var(--text-options-color);
    background-color: var(--text-options-bg);
  }
  .btn-blue {
    @apply bg-blue-500;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }

  @media only screen and (max-width: 600px) {
    .btn {
      @apply px-6 py-6;
    }
  }
</style>

<button
  class="btn focus:outline-none focus:shadow-outline"
  on:click={handleClick}>
  <span>
    <slot />
  </span>
  {#if type === TEXT_OPTIONS.TEXT}
    <span class="material-icons"> subject </span>
  {:else}<span class="material-icons"> web </span>{/if}
</button>
