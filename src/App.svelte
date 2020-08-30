<script lang="ts">
  import Tailwind from './Tailwind.svelte';

  import Button from './components/Button.svelte';

  // var d = document.documentElement,
  //   t = document.querySelector('#theme-btn'),
  //   m = localStorage.getItem('theme');

  // if (m == 'dark') {
  //   d.classList.add('theme-dark');
  // }

  // t.addEventListener('click', function () {
  //   if (d.classList.contains('theme-dark')) {
  //     d.classList.remove('theme-dark');
  //     localStorage.removeItem('theme');
  //   } else {
  //     d.classList.add('theme-dark');
  //     localStorage.setItem('theme', 'dark');
  //   }
  // });
</script>

<style lang="scss">
  main {
    h1 {
      font-size: 2rem;
    }
  }

  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }
</style>

<Tailwind />
<main>
  <h1 class="text-red-400">The rest of our app will be here</h1>
  <Button>Toggle</Button>

</main>
