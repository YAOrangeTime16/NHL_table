<template>
  <section class="table-section">
    <div class="conference-wrapper">
      <div class="table-wrapper">
        <Table :conference="CONFERENCE.WESTERN" :list="teamByConference.western" @modal-open="modalOpen"/>
      </div>
    </div>
    <div class="conference-wrapper">
      <div class="table-wrapper">
        <Table :conference="CONFERENCE.EASTERN" :list="teamByConference.eastern" @modal-open="modalOpen"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITeamByConference } from "../typings";
import Table from "./Table.vue";
import { CONFERENCE } from "../typings/enums";

@Component({
  components: {
    Table
  }
})
export default class TableWrapper extends Vue {
  @Prop()
  protected readonly teamByConference: ITeamByConference;

  protected CONFERENCE = CONFERENCE;

  protected modalOpen(content) {
    this.$emit("modal-open", content)
  }
}
</script>
<style lang="scss" scoped>
.table-section {
  scroll-snap-type: x mandatory;

  @apply flex flex-row flex-nowrap overflow-x-scroll;

  @screen sm {
    @apply grid grid-cols-2 gap-4;
  }
}

.conference-wrapper {
  @apply flex flex-col mr-2;
  flex: 0 0 auto;

  @screen sm {
    @apply mr-0;
  }
}
.table-wrapper {
  @apply flex flex-col;
}
</style>