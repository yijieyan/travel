<template lang="html">
  <div :class="$style.home">
    hello world
    <p>i am child</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" module>
  .home {
    color:red;
    font-size: 100px;
    p {
      color: blue;
    }
  }
</style>
