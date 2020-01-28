<template>
  <div class="kana-block">
    This is the kana block.
  </div>
</template>

<script>
export default {
  name: 'KanaBlock',
  components: {
  },
  props: {
    settings: Object,
  },
};
</script>

<style scoped>
.size {
  margin-bottom: 20px;
}

.symbols, .orientation {
  display: inline-block;
}

.symbols {
  margin-right: 10px;
}
</style>
