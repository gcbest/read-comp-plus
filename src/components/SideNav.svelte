<script>
  import Dropdown from './Dropdown.svelte';
  import ToggleDarkMode from './ToggleDarkMode.svelte';

  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
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
    background-color: #457b9d;
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
  }
</style>

<aside id="mySidenav" class="sidenav">
  <nav>
    <ul>
      <li>
        <span class="toggle-dark-mode">
          <ToggleDarkMode />
        </span>
        <span class="closebtn cursor-pointer" on:click={closeNav}>&times;</span>
      </li>
      <li>
        <Dropdown title="Speed" options={speedOptions} />
      </li>
    </ul>
  </nav>
</aside>
