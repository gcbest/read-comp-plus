<script>
  import { onMount } from 'svelte';

  import { text, font, color, size } from '../stores';

  function whichAnimationEvent() {
    var t,
      el = document.createElement('fakeelement');

    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd',
    };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }

  const animationEvent = whichAnimationEvent();

  onMount(() => {
    let p = document.querySelector('.scroll-up p');
    const doneFunction = () => {
      alert('DOOONNNE');
    };
    p.addEventListener(animationEvent, doneFunction);
  });
</script>

<style style="text/css">
  .scroll-up {
    height: 80vh;
    overflow: hidden;
    position: relative;
  }
  .scroll-up p {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 50px;
    text-align: center;
    /* Starting position */
    -moz-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    /* Apply animation to this element */
    -moz-animation: scroll-up 5s linear;
    -webkit-animation: scroll-up 5s linear;
    animation: scroll-up 3s linear;
  }
  /* Move it (define the animation) */
  @-moz-keyframes scroll-up {
    0% {
      -moz-transform: translateY(100%);
    }
    100% {
      -moz-transform: translateY(-100%);
    }
  }
  @-webkit-keyframes scroll-up {
    0% {
      -webkit-transform: translateY(100%);
    }
    100% {
      -webkit-transform: translateY(-100%);
    }
  }
  @keyframes scroll-up {
    0% {
      -moz-transform: translateY(100%); /* Browser bug fix */
      -webkit-transform: translateY(100%); /* Browser bug fix */
      transform: translateY(30%);
    }
    100% {
      -moz-transform: translateY(-100%); /* Browser bug fix */
      -webkit-transform: translateY(-100%); /* Browser bug fix */
      transform: translateY(-500%);
    }
  }
</style>

<div class="scroll-up">
  <p style="font-family: {$font}; color: {$color}; font-size: {$size}px;">
    {$text}
  </p>
</div>
