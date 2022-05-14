<template>
  <ul class="listsyle-none grid grid-cols-2 text-center bg-white">
    <li
      v-for="conference in conferences" :key="conference.id"
      class="item"
      :class="{active: conference.id === activeItem}"
      @click="onClick(conference.id)"
    >
      {{conference.label}}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IToggleHeaderConference } from "../typings";

@Component
export default class ToggleHeader extends Vue {

  protected activeItem: string = "western";

  protected readonly conferences: IToggleHeaderConference[] = [
    {
      id: "western",
      label: "WESTERN"
    },
    {
      id: "eastern",
      label: "EASTERN"
    }
  ]

  protected onClick(id): void {
    this.activeItem = id;

    this.$emit("scroll", id)
  }
}
</script>
<style lang="postcss" scoped>
.item {
    @apply text-xl border-b-8 border-gray-300 py-2 mt-2 cursor-pointer transition-colors duration-500;
}

.item.active {
  @apply border-blue-700;
}
</style>