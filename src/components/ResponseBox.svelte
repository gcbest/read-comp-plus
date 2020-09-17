<script lang="ts">
  export let value: string;
  export let name: string;
  export let placeholder: string;
</script>

<textarea
  {name}
  class="bg-white focus:outline-none focus:shadow-outline my-2 p-4 rounded w-4/5"
  id=""
  cols="30"
  rows="7"
  {placeholder}
  bind:value />
