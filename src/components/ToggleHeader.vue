<template>
  <ul class="listsyle-none grid grid-cols-2 text-center">
    <li
      v-for="conference in conferences" :key="conference.id"
      class="item"
      :class="{active: conference.id === activeItem}"
      @click="activeItem = conference.id"
    >
      {{conference.label}}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class ToggleHeader extends Vue {

  protected activeItem = "stats";

  protected readonly conferences = [
    {
      id: "stats",
      label: "STATS"
    },
    {
      id: "team",
      label: "TEAMS"
    }
  ]

}
</script>
<style lang="postcss" scoped>
.item {
    @apply text-xl border-b-4 border-gray-300 py-4 cursor-pointer transition-colors duration-500;
}

.item.active {
  @apply border-blue-700;
}
</style>