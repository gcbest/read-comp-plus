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
  import { whichAnimationEvent } from '../utils';
  export let time;
  let pixelsY;

  const animationEvent = whichAnimationEvent();

  onMount(() => {
    const textP = document.querySelector('.scroll-up p');

    const doneNextSteps = () => isReadingDoneAreaVisible.set(true);

    textP.addEventListener(animationEvent, doneNextSteps);

    const pHeight = window.getComputedStyle(textP).height;
    pixelsY = `-${pHeight}`;
  });
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
    -moz-transform: translateY(1%);
    -webkit-transform: translateY(1%);
    transform: translateY(1%);
    /* Apply animation to this element */
    -moz-animation: scroll-up var(--time) linear;
    -webkit-animation: scroll-up var(--time) linear;
    animation: scroll-up var(--time) linear;
    animation-delay: 3000ms;
  }

  @-moz-keyframes scroll-up {
    0% {
      -moz-transform: translateY(1%);
    }
    100% {
      -moz-transform: translateY(var(--pixelsY));
    }
  }
  @-webkit-keyframes scroll-up {
    0% {
      -webkit-transform: translateY(1%);
    }
    100% {
      -webkit-transform: translateY(var(--pixelsY));
    }
  }
  @keyframes scroll-up {
    0% {
      -moz-transform: translateY(1%); /* Browser bug fix */
      -webkit-transform: translateY(1%); /* Browser bug fix */
      transform: translateY(1%);
    }
    100% {
      -moz-transform: translateY(var(--pixelsY)); /* Browser bug fix */
      -webkit-transform: translateY(var(--pixelsY)); /* Browser bug fix */
      transform: translateY(var(--pixelsY));
    }
  }
</style>

<div class="scroll-up" style="--time: {time}; --pixelsY: {pixelsY}">
  <p style="font-family: {$font}; color: {$color}; font-size: {$size}px;">
    {$text}
  </p>
</div>
