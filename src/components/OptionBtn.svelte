<script lang="ts">
  // export let handleClick: () => void;
  import { isTextAreaVisible } from '../stores';

  export let handleClick;
</script>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>

<button class="btn btn" on:click={handleClick}>
  <slot />
</button>
