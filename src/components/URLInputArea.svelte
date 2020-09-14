<script lang="ts">
  import type { element } from 'svelte/internal';
  import { CORS_URL } from '../const';

  import { isURLAreaVisible, isTextAreaVisible, text } from '../stores';
  import { formatHTML } from '../utils';

  let url: string;
  let htmlPromise;
  let loading: boolean = false;

  const getHTML = async () => {
    loading = true;
    const res = await fetch(CORS_URL + url);
    const html = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    console.log(doc);

    if (res.ok) {
      const newText = formatHTML(doc);
      text.set(newText);
      isTextAreaVisible.set(true);
      isURLAreaVisible.set(false);
      loading = false;
      //   return html;
    } else throw new Error('Unable to get website');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    htmlPromise = getHTML();
  };
</script>

<style>
  .input {
    @apply bg-white border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal;
  }
</style>

{#if $isURLAreaVisible}
  <section class="text-center">
    <label for="url">Enter Article URL:</label>
    <input
      name="url"
      class="input focus:outline-none focus:shadow-outline max-w-sm m-auto my-4"
      type="url"
      placeholder="e.g. https://medium.com/the-mission/the-kaizen-approach-to-achieving-your-biggest-goal-the-philosophy-of-constant-improvement-172033f8346"
      bind:value={url} />
    <button
      class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
        hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      on:click={handleSubmit}
      disabled={loading}
      type="button">
      {#if loading}Searching...{:else}Search{/if}
    </button>
    <div class="feedback">
      <!-- {#await htmlPromise}
        
        {:then html } 
        
        {/await} -->
      <!-- {#await htmlPromise}
        <p>...waiting</p>
      {:then html}
        <p>Page received</p>
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await} -->
    </div>
  </section>
{/if}
