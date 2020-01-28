<template>
  <div class="controls">
    <div class="count">
      {{ settings.count }} characters per panel
      <el-slider v-model="settings.count" :max="maxChars"></el-slider>
    </div>
    <div class="size">
      {{ settings.size }}px large
      <el-slider v-model="settings.size"></el-slider>
    </div>
    <div class="symbols">
      <el-radio-group v-model="settings.symbols" size="medium">
        <el-radio-button label="hiragana">Hiragana</el-radio-button>
        <el-radio-button label="katakana">Katakana</el-radio-button>
        <el-radio-button label="kana">Both</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  components: {
  },
  props: {
    settings: Object,
  },
  data() {
    return {
      maxChars: 500,
    };
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
