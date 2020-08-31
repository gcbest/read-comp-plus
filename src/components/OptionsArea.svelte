<script lang="ts">
  import OptionBtn from './OptionBtn.svelte';

  // export let isTextAreaVisible: boolean = false;
  export let visible: boolean = false;

  const toggleTextArea = () => (visible = !visible);
</script>

<section class="flex-auto justify-between">
  <OptionBtn handleClick={toggleTextArea}>Text</OptionBtn>
  <OptionBtn>URL</OptionBtn>
</section>
