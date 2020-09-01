<script lang="ts">
  import OptionBtn from './OptionBtn.svelte';

  // export let isTextAreaVisible: boolean = false;
  export let visible: boolean = false;

  const toggleTextArea = () => (visible = !visible);
</script>

<section class="my-3">
  <p class="text-center my-3">Hello and Welcome to Read Comp+!</p>
  <div class="flex justify-evenly">
    <OptionBtn handleClick={toggleTextArea}>Text</OptionBtn>
    <OptionBtn>URL</OptionBtn>
  </div>
</section>
