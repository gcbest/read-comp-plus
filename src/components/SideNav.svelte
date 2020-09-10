<script lang="ts">
  import { fly } from 'svelte/transition';
  import Dropdown from './Dropdown.svelte';
  import ToggleDarkMode from './ToggleDarkMode.svelte';
  import { open, wpm, font, size, animationTime, text } from '../stores';
  import { COLORS, FONTS } from '../const';
  import { clickOutside, calculateScrollSpeed, updateTime } from '../utils';

  const fontOptions = [...Object.keys(FONTS)];
  const colorOptions = [...Object.keys(COLORS)];

  const closeNav = () => open.set(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'wpm') updateTime($wpm, $text);
    else localStorage.setItem(name, value); // since it will be set for wpm in updateTime fn
  };
</script>

<style>
  .sidenav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    /* background-color: #a8dadc; */
    background-color: #a8dadc;
    overflow-x: hidden;
    transition: 0.3s;
    padding-top: 60px;
  }

  .sidenav span {
    padding: 1rem;
    text-decoration: none;
    font-size: 25px;
    /* color: #818181; */
    display: block;
    transition: 0.3s;
  }

  .sidenav span:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  .sidenav .toggle-dark-mode {
    display: none;
  }

  ul li:first-child {
    display: block;
  }

  .input {
    @apply bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal;
  }

  .settings {
    top: 8rem;
  }

  .settings li {
    margin: 1.5rem;
  }

  /* DARK THEME */
  :global(body.dark-mode) .sidenav {
    /* background-color: #457b9d; */
    /* background-color: #5590b4; */
    background-color: #71a2c1;
    color: #bfc2c7;
    /* @apply text-red-400; */
  }

  @media screen and (max-width: 600px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }

    .sidenav .toggle-dark-mode {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      padding: 1.5rem;
    }
  }
</style>

{#if $open}
  <aside
    transition:fly={{ x: 250, opacity: 1 }}
    id="mySidenav"
    class="sidenav"
    use:clickOutside={{ enabled: open, cb: closeNav }}>
    <ul>
      <li>
        <span class="toggle-dark-mode">
          <ToggleDarkMode />
        </span>
        <span class="closebtn cursor-pointer" on:click={closeNav}>&times;</span>
      </li>
      <div class="settings absolute">
        <li>
          <label class="text-gray-300 font-semibold" for="wpm">Words Per Minute</label>
          <input
            id="wpm"
            name="wpm"
            class="input focus:outline-none focus:shadow-outline"
            type="text"
            pattern="\d"
            maxlength="4"
            on:change={handleChange}
            bind:value={$wpm}
            placeholder="e.g. 200 wpm" />
        </li>
        <li>
          <label class="text-gray-300 font-semibold" for="font-size">Font Size</label>
          <input
            id="font-size"
            name="font-size"
            class="input focus:outline-none focus:shadow-outline"
            type="text"
            pattern="\d"
            maxlength="2"
            on:change={handleChange}
            bind:value={$size}
            placeholder="e.g. 16" />
        </li>
        <li class="flex justify-between">
          <Dropdown title="Font" options={fontOptions} />
          <Dropdown title="Color" options={colorOptions} />
        </li>
      </div>
    </ul>
  </aside>
{/if}
