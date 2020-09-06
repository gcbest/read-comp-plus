<script lang="ts">
  export let value: string;
  export let name: string;
  export let placeholder: string;
</script>

<textarea
  {name}
  class="focus:outline-none focus:shadow-outline my-4 p-4 rounded"
  id=""
  cols="30"
  rows="10"
  {placeholder}
  bind:value />
