<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  import { isOptionsAreaVisible } from '../stores';

  import OptionBtn from './OptionBtn.svelte';
</script>

{#if $isOptionsAreaVisible}
  <section class="my-3" in:fly={{ y: 200, duration: 1000 }} out:fade>
    <p class="text-center my-3">Hello and Welcome to Read Comp+!</p>
    <div class="flex justify-evenly">
      <OptionBtn>Text</OptionBtn>
      <OptionBtn>URL</OptionBtn>
    </div>
  </section>
{/if}
