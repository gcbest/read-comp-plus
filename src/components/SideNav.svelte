<script>
  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  };
</script>

<style>
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #457b9d;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  .sidenav span {
    padding: 8px 8px 8px 32px;
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

  /* DARK THEME */
  :global(body.dark-mode) .sidenav {
    background-color: #457b9d;
    /* color: #bfc2c7; */
    /* @apply text-red-400; */
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
</style>

<aside id="mySidenav" class="sidenav">
  <nav>
    <ul>
      <li>
        <span class="closebtn cursor-pointer" on:click={closeNav}>&times;</span>

      </li>
      <li>
        <span class="text-red-400" href="/home">Home</span>
      </li>
      <li>
        <span class="text-red-400" href="/about">About</span>
      </li>
      <li>
        <span class="text-red-400" href="/contact">Contact us</span>
      </li>
    </ul>
  </nav>
</aside>
