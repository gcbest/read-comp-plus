<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { CORS_URL } from '../const';

  import { isURLAreaVisible, isTextAreaVisible, text } from '../stores';
  import { formatHTML } from '../utils';

  let url: string = '';
  let loading: boolean = false;
  let hasFetchError: boolean = false;
  let errMsg: string = '';

  const getHTML = async () => {
    loading = true;
    const res = await fetch(CORS_URL + url);
    const html = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    console.log(doc);

    if (res.ok) {
      const newText = formatHTML(doc);
      if (!newText) throw new Error('Unable to find article details');

      text.set(newText);
      isTextAreaVisible.set(true);
      isURLAreaVisible.set(false);
      loading = false;
    } else {
      hasFetchError = true;
      loading = false;
      throw new Error('Unable to get website');
    }
  };

  const showError = (err: Error) => {
    hasFetchError = true;
    errMsg = err.message;
    loading = false;
  };

  const handleChange = () => {
    hasFetchError = false;
    loading = false;
  };

  const handleSubmit = () => {
    getHTML().catch((err) => showError(err));
  };
</script>

<style>
  .input {
    @apply bg-white border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal;
  }
</style>

{#if $isURLAreaVisible}
  <section
    class="text-center"
    in:fly={{ y: 200, duration: 1000 }}
    out:fade={{ duration: 300 }}>
    <form on:submit|preventDefault={handleSubmit}>
      <label for="url">Enter an Article's Link:</label>
      <input
        name="url"
        class="input focus:outline-none focus:shadow-outline max-w-sm m-auto
          my-4"
        type="url"
        on:input={handleChange}
        placeholder="e.g. https://medium.com/the-mission/the-kaizen-approach-to-achieving-your-biggest-goal-the-philosophy-of-constant-improvement-172033f8346"
        bind:value={url} />
      <button
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
          hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        disabled={loading || !url.length}
        type="submit">
        {#if loading}Searching...{:else}Search{/if}
      </button>
    </form>
    {#if hasFetchError}
      <div class="feedback">
        <p class="my-4 text-red-500">{errMsg}</p>
        <p class="text-red-500">Please try different URL</p>
      </div>
    {/if}
  </section>
{/if}
