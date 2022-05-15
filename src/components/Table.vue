<template>
  <div :class="conference">
    <h2 v-text="conference.toUpperCase()" class="conference-header"/>
    <ul class="listsyle-none grid grid-cols-1 gap-y-2">
      <li
        v-for="team in list" :key="team.id"
      >
        <div
          class="team font-bold"
        >
          <div class="w-1/12">
            {{team.position}}.
          </div>
          <div class="w-11/12">{{team.teamName}}</div>
          <button
            class="btn-open"
            title="team information"
            aria-label="team information"
            @click="emitModalOpen(team)"
          >
            <Information />
          </button>
        </div>
        <div class="grid grid-cols-11 text-center text-xs">
          <div
            v-for="(points, key, index) in team.stats"
            :key="index"
          >
            <div
              class="border-r border-white"
              :class="[key === sortBy ? 'bg-red-200' : 'bg-gray-300']"
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
import Information from "vue-material-design-icons/Information.vue";
import { DataEntity } from "../typings";
import { TSortSelectOptionsId } from "../typings/types";

@Component({
  components: {
    Information
  }
})
export default class Table extends Vue {
  @Prop({required: true})
  protected readonly list: (DataEntity)[];

  @Prop({required: true})
  protected readonly conference: string;

  @Prop()
  protected readonly sortBy: TSortSelectOptionsId;

  protected emitModalOpen(content): void {
    this.$emit("modal-open", content)
  }
}
</script>
<style lang="scss" scoped>
.conference-header {
  @apply font-bold block py-2 px-4 text-white;
}

.team {
  @apply border-l-4 border-b border-blue-900 pl-2 flex items-center py-2 transition;

}

.western {
  .conference-header {
    @apply bg-blue-900;
  }

  .btn-open {
    @apply text-blue-900;

    :hover {
      @apply text-blue-700;
    }
  }

  .team {
    @apply border-blue-900;
  }
}

.eastern {
  .conference-header {
    @apply bg-red-900;
  }

  .btn-open {
    @apply text-red-900;

    &:hover {
      @apply text-red-700;
    }
  }

  .team {
    @apply border-red-900;
  }
}

.btn-open {
  @apply p-1 text-xs text-white rounded;
}
</style>
