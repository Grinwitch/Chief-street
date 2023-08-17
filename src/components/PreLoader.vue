<template>
  <div class="preloader">
    <div class="preloader__content">
      <img src="@/assets/img/preloader.png" class="circle-rotate">
    </div>
  </div>
</template>

<style>
  .preloader {
    width: 100%;
    height: 100%;
  }

  .circle-rotate {
    width: 100%;
    height: 100%;
    transform: rotate(0deg);
    border-radius: 50%;
    animation-name: rotation;
    animation-duration: 1.2s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotation {  0%{transform:rotate(0deg)}
    30%{transform:rotate(80deg)}  100%{transform:rotate(360deg)}
  }
</style>
