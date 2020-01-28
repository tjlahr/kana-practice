<template>
  <div class="kana-block" v-bind:style="{ fontSize: fontSize + 'px' }">
    {{ characters }}
  </div>
</template>

<script>
export default {
  name: 'KanaBlock',
  props: ['characters', 'fontSize'],
};
</script>

<style scoped>
.kana-block {
  line-height: 2em;
}
</style>
