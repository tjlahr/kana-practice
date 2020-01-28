<template>
  <div id="app">

    <el-drawer
      title="Settings"
      :visible.sync="drawer"
      direction="ttb"
      size="40%">
      <Controls :settings="settings" />
    </el-drawer>

    <header class="app-header">
      <el-button @click="drawer = true" type="text">Settings</el-button>
      <h1>Kana Practice</h1>
      <el-button @click="setCharacters" type="primary">Next</el-button>
    </header>

    <el-divider></el-divider>

    <KanaBlock :characters="characters" :fontSize="settings.size" />

    <el-divider></el-divider>

    <div class="about">
      <el-link target="_blank" href="https://github.com/tjlahr/kana-practice">tjlahr/kana-practice</el-link>
    </div>

    <div class="debug-panel" v-if="debug">
      <div>Count: {{ settings.count }}</div>
      <div>Size: {{ settings.size }}</div>
      <div>Symbols: {{ settings.symbols }}</div>
      <div>Orientation: {{ settings.orientation }}</div>
    </div>
  </div>
</template>

<script>
import Controls from './components/Controls.vue';
import KanaBlock from './components/KanaBlock.vue';
import kanaGenerator from './KanaGenerator';

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
      drawer: false,
      debug: false,
      settings: DEFAULT_SETTINGS,
      characters: '',
    };
  },
  methods: {
    setCharacters() {
      this.characters = kanaGenerator.generateCharacters(this.settings.count, this.settings.symbols).join('');
    },
  },
  watch: {
    settings: {
      deep: true,
      handler() {
        this.setCharacters();
      },
    },
  },
  beforeMount() {
    this.setCharacters();
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 25px;
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

.app-header {
  display: flex;
  justify-content: space-between;
}

.app-header h1 {
  margin: 0;
}

.about {
  text-align: center;
  font-size: 10px;
}
</style>
