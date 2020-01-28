<template>
  <div id="app">

    <el-drawer
      title="Settings"
      :visible.sync="drawer"
      direction="ttb"
      size="40%">
      <Controls :settings="settings" />
    </el-drawer>

    <header>
      <h1>Kana Practice</h1>
      <el-button @click="drawer = true" type="text">Settings</el-button>
      <el-button @click="setCharacters" type="text">Next</el-button>
    </header>

    <KanaBlock :characters="characters" :fontSize="settings.size" />

    <hr>
    <div>Count: {{ settings.count }}</div>
    <div>Size: {{ settings.size }}</div>
    <div>Symbols: {{ settings.symbols }}</div>
    <div>Orientation: {{ settings.orientation }}</div>
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
      refesh: new Date(),
      settings: DEFAULT_SETTINGS,
      drawer: false,
      characters: '',
    };
  },
  methods: {
    setCharacters() {
      this.characters = kanaGenerator.generateCharacters(this.settings.count, this.settings.symbols).join('');
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
