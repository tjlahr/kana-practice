<template>
  <div id="app">

    <el-drawer
      title="Settings"
      :visible.sync="drawer"
      direction="ttb"
      size="40%">
      <Controls :settings="controls" />
    </el-drawer>

    <header>
      <h1>Kana Practice</h1>
      <el-button @click="drawer = true" type="text">Settings</el-button>
    </header>

    <KanaBlock :settings="controls" />

    <hr>
    <div>Count: {{ controls.count }}</div>
    <div>Size: {{ controls.size }}</div>
    <div>Symbols: {{ controls.symbols }}</div>
    <div>Orientation: {{ controls.orientation }}</div>
  </div>
</template>

<script>
import Controls from './components/Controls.vue';
import KanaBlock from './components/KanaBlock.vue';

const DEFAULT_SETTINGS = {
  count: 75,
  size: 32,
  symbols: 'kana',
  orientation: 'horizontal',
};

export default {
  name: 'app',
  components: {
    Controls,
    KanaBlock,
  },
  data() {
    return {
      controls: DEFAULT_SETTINGS,
      drawer: false,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  text-align: center;
}

.el-drawer {
  padding: 10px;
}

.el-drawer header {
  padding: 0px;
  font-size: 1.5em;
  font-weight: bold;
  color: inherit;
  margin-bottom: 25px;
}
</style>
