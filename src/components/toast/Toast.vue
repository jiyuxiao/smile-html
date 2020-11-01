<template>
  <transition name="ala-toast-pop">
    <div class="ala-toast" v-show="visible" :class="className">
      <span class="ala-toast-text">{{ message }}</span>
    </div>
  </transition>
</template>

<style>
  .ala-toast {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    padding: 5px 10px;
    text-align: center;
    z-index: 99999999999;
    transition: opacity .3s linear;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .ala-toast-text {
    font-size: 12px;
    display: block;
    text-align: center;
  }
  .ala-toast-pop-enter, .ala-toast-pop-leave-active {
    opacity: 0;
  }
</style>

<script>
  export default {
    name: 'toast',
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
    },

    data() {
      return {
        visible: false
      }
    },

    computed: {

    }
  }
</script>
