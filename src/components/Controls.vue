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
    <div class="theme">
      <el-radio-group v-model="theme" @change="onThemeChange">
        <el-radio-button label="light">Light</el-radio-button>
        <el-radio-button label="dark">Dark</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
import { getCurrentTheme, setCurrentTheme } from '../theming';

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
      theme: getCurrentTheme(),
    };
  },
  methods: {
    onThemeChange(theme) {
      setCurrentTheme(theme);
    },
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
  margin-bottom: 20px;
}
</style>
