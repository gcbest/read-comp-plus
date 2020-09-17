<script lang="ts">
  export let value: string;
  export let name: string;
  export let placeholder: string;
</script>

<textarea
  {name}
  class="focus:outline-none focus:shadow-outline my-2 p-4 rounded"
  id=""
  cols="30"
  rows="7"
  {placeholder}
  bind:value />
