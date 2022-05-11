<template>
  <div id="app" class="app">
    <Header />
    <Content />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/layout/Header.vue';
import Content from './components/layout/Content.vue';

@Component({
  components: {
    Content,
    Header,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
</style>