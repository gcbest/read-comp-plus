<script lang="ts">
  import Dropdown from './Dropdown.svelte';
  import ToggleDarkMode from './ToggleDarkMode.svelte';

  export let body: HTMLElement;
  export let theme: string | undefined;
  export let darkMode: boolean | undefined;

  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
  };

  const speedOptions = ['slow', 'medium', 'fast'];
</script>

<style>
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #a8dadc;
    overflow-x: hidden;
    transition: 0.5s;
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

  /* DARK THEME */
  :global(body.dark-mode) .sidenav {
    background-color: #457b9d;
    /* color: #bfc2c7; */
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

    .options {
      top: 10rem;
    }
  }
</style>

<aside id="mySidenav" class="sidenav">
  <ul>
    <li>
      <span class="toggle-dark-mode">
        <ToggleDarkMode {body} {theme} bind:darkMode />
      </span>
      <span class="closebtn cursor-pointer" on:click={closeNav}>&times;</span>
    </li>
    <div class="options absolute">
      <li>
        <Dropdown title="Speed" options={speedOptions} />
      </li>
    </div>
  </ul>
</aside>
