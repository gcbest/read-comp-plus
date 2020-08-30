<script lang="ts">
  export let text: string;
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

<textarea class="resize-y" name="content" cols="30" rows="10">{text}</textarea>
