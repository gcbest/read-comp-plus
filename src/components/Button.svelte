<script lang="ts">
  export let green: boolean = false;
  export let blue: boolean = false;
  export let yellow: boolean = false;
  export let purple: boolean = false;
  export let handleClick: () => void;
</script>

<style>
  .btn {
    @apply font-bold py-4 px-8 rounded;
  }

  .blue {
    @apply bg-blue-500 text-white;
  }
  .blue:hover {
    @apply bg-blue-700;
  }

  .green {
    @apply bg-green-500 text-white;
  }
  .green:hover {
    @apply bg-green-700;
  }

  .yellow {
    @apply bg-yellow-500 text-white;
  }
  .yellow:hover {
    @apply bg-yellow-700;
  }

  .purple {
    @apply bg-purple-500 text-white;
  }
  .purple:hover {
    @apply bg-purple-700;
  }
</style>

<button
  class="btn focus:outline-none focus:shadow-outline"
  class:green
  class:blue
  class:yellow
  class:purple
  on:click={handleClick}>
  <slot />
</button>
