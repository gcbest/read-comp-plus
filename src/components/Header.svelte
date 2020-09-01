<script>
  const openNav = () => {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  };
</script>

<style>
  /* DARK THEME */
  :global(body.dark-mode) header {
    @apply text-red-400;
  }
</style>

<nav>

  <header class="text-blue-500 text-5xl text-center m-auto">Read Comp +</header>
  <span class="material-icons cursor-pointer" on:click={openNav}>settings</span>
</nav>
