<template>
  <div class="kana-block" v-bind:style="{ fontSize: settings.size + 'px' }">
    {{ characters }}
  </div>
</template>

<script>
import kanaGenerator from '../KanaGenerator';

export default {
  name: 'KanaBlock',
  components: {
  },
  props: {
    settings: Object,
  },
  computed: {
    characters() {
      return kanaGenerator.generateCharacters(this.settings.count).join('');
    },
  },
};
</script>

<style scoped>
.kana-block {
  line-height: 2em;
}
</style>
