<template>
  <div id="app" class="app">
    <Header />
    <Content />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './layout/Header.vue';
import Content from './layout/Content.vue';

@Component({
  components: {
    Content,
    Header,
  },
})
export default class App extends Vue {}
</script>
<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
