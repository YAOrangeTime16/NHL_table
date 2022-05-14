<template>
  <section class="table-section" ref="tableSection">
    <div class="table" ref="westernTable">
      <Table
        :conference="CONFERENCE.WESTERN"
        :list="teamByConference.western"
        :sort-by="sortBy"
        @modal-open="modalOpen"
      />
    </div>
    <div class="table" ref="easternTable">
      <Table
        :conference="CONFERENCE.EASTERN"
        :list="teamByConference.eastern"
        :sort-by="sortBy"
        @modal-open="modalOpen"
      />
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Ref, Watch, Vue } from "vue-property-decorator";
import { CONFERENCE } from "../typings/enums";
import { ITeamByConference } from "../typings";
import { TSortSelectOptionsId } from "../typings/types";
import Table from "./Table.vue";

@Component({
  components: {
    Table
  }
})
export default class TableWrapper extends Vue {
  @Prop()
  protected readonly teamByConference: ITeamByConference;

  @Prop()
  protected readonly sortBy: TSortSelectOptionsId;

  @Prop()
  protected readonly scrollTo: string;

  @Ref()
  protected easternTable: HTMLElement;

  @Ref()
  protected westernTable: HTMLElement;

  @Ref()
  protected tableSection: HTMLElement;

  @Watch("scrollTo")
  protected scrollToTable(scrollToName): void {
    if (scrollToName === "eastern") {
      this.tableSection.scrollTo({
        top: this.easternTable.offsetTop,
        left: this.easternTable.offsetLeft + 8,
        behavior: "smooth"
      });
    } else {
      this.tableSection.scrollTo({
        top: this.westernTable.offsetTop,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  protected CONFERENCE = CONFERENCE;

  protected modalOpen(content): void {
    this.$emit("modal-open", content)
  }
}
</script>
<style lang="scss" scoped>
.table-section {
  scroll-snap-type: x mandatory;

  @apply flex overflow-x-scroll;

  @screen md {
    @apply justify-center;
  }
}

.table {
  @apply flex flex-col mr-2 my-4;
  flex: 0 0 auto;
  scroll-snap-align: start;

  @screen md {
    @apply flex-auto;
  }
}
</style>