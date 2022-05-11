<template>
  <div>
    <h2 v-text="conference.toUpperCase()" class="font-bold"/>
    <ul class="listsyle-none grid grid-cols-1 gap-y-2">
      <li
        v-for="team in list" :key="team.id"
      >
        <div
          class="team font-bold"
          :class="conference"
          @click="emitModalOpen(team)"
        >
          <div class="w-1/12">
            {{team.position}}.
          </div>
          <div class="w-11/12">{{team.teamName}}</div>
        </div>
        <div class="grid grid-cols-11 text-center text-xs">
          <div
            v-for="(points, key, index) in team.stats"
            :key="index"
          >
            <div
              class="border-r border-white bg-gray-300"
            >
              {{key}}
            </div>
            <div>
              {{points ? points : "-"}}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DataEntity } from "../typings";


@Component
export default class Table extends Vue {
  @Prop({required: true})
  protected readonly list: (DataEntity)[];
  @Prop({required: true})
  protected readonly conference: string;

  protected emitModalOpen(content) {
    this.$emit("modal-open", content)
  }

}
</script>
<style lang="scss" scoped>
.team {
  @apply border-l-4 border-b border-blue-900 pl-2 flex items-center py-2 cursor-pointer transition;

  &:hover {
    @apply bg-gray-200;
  }
}

.team.western {
  @apply border-blue-900;
}

.team.eastern {
  @apply border-red-900;
}
</style>
