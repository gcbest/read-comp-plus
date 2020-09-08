<script>
  import { onMount } from 'svelte';

  import {
    text,
    font,
    color,
    size,
    wpm,
    isReadingDoneAreaVisible,
  } from '../stores';
  import { whichAnimationEvent, calculateScrollSpeed } from '../utils';

  const { time, percentY } = calculateScrollSpeed(parseInt($wpm), $text.length);

  const animationEvent = whichAnimationEvent();

  onMount(() => {
    const textP = document.querySelector('.scroll-up p');
    const doneNextSteps = () => {
      isReadingDoneAreaVisible.set(true);
    };

    textP.addEventListener(animationEvent, doneNextSteps);
  });

  function spin(node, { duration }) {
    return {
      duration,
      css: (t) => {
        const eased = elasticOut(t);

        return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
      },
    };
  }
</script>

<style>
  .scroll-up {
    height: 72vh;
    overflow: hidden;
    position: relative;
  }
  .scroll-up p {
    position: absolute;
    width: 100%;
    height: fit-content;
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
    animation: scroll-up var(--time) linear;
    animation-delay: 3000ms;
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
      /* transform: translateY(-150%); */
      transform: translateY(var(--percentY));
    }
  }
</style>

<div class="scroll-up" style="--time: {time}; --percentY: {percentY}">
  <p style="font-family: {$font}; color: {$color}; font-size: {$size}px;">
    {$text}
  </p>
</div>
