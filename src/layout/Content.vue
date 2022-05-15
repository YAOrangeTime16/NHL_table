<template>
  <main>
    <section class="page-content">
      <Modal v-show="isModalOpen" :modal-content="modalContent" @close="closeModal"/>
      <ToggleHeader @scroll="setScroll" class="toggle-header" />
      <Sorting @selected="setBy" @radio-change="setDirection"/>
      <TableWrapper
        :team-by-conference="teamByConference"
        @modal-open="openModal"
        :scroll-to="scrollTo"
        :sort-by="sort.by"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Modal from "../components/Modal.vue";
import Sorting from '../components/Sorting.vue';
import ToggleHeader from '../components/ToggleHeader.vue';
import TableWrapper from '../components/TableWrapper.vue';
import { listTeamsByCategory, fetchData } from "../utils/"
import { DataEntity, ITeamByConference } from "../typings";
import { CONFERENCE } from "../typings/enums";
// import { leagueStandings } from "../mock-data";

@Component({
  components: {
    Modal,
    Sorting,
    TableWrapper,
    ToggleHeader,
  },
})
export default class Content extends Vue {
  protected sort = {
    by: "Standing",
    direction: "asc"
  }
  protected scrollTo = "western";

  protected teamByConference: ITeamByConference = {
    [CONFERENCE.WESTERN]: [],
    [CONFERENCE.EASTERN]: [],
  };
  protected isModalOpen: boolean = false;
  protected modalContent = {};

  protected setBy(value: string): void {
    this.$set(this.sort, "by", value);
    this.tableSort();
  }

  protected setDirection(value: string): void {
    this.$set(this.sort, "direction", value);
    this.tableSort();
  }

  protected setScroll(value: string): void {
    this.scrollTo = value;
  }

  protected tableSort(): void {
    this.teamByConference[CONFERENCE.WESTERN].sort(this.sorting);
    this.teamByConference[CONFERENCE.EASTERN].sort(this.sorting);
  }

  protected sorting(a, b): number {
      let returnValue = 0;

      if (this.sort.by === "Standing") {
        if (this.sort.direction === "asc") {
          returnValue = +a.position - +b.position;
        } else {
          returnValue = +b.position - +a.position;
        }
      } else {
        if (this.sort.direction === "asc") {
          returnValue = a.stats[this.sort.by] > b.stats[this.sort.by] ? -1 : 1;
        } else {
          returnValue = a.stats[this.sort.by] > b.stats[this.sort.by] ? 1 : -1;
        }
      }

      return returnValue;
  }

  protected async created() {
    // Call API endpoint.
    const response = await fetchData();
    const data = response.data;

    // // Mock data.
    // const {data} = leagueStandings;

    this.teamByConference = listTeamsByCategory(data as DataEntity[]);
  }

  protected openModal(info): void {
    this.modalContent = info;
    this.isModalOpen = true;
  }

  protected closeModal(): void {
    this.isModalOpen = false;
    this.modalContent = {};
  }
}
</script>
<style lang="scss" scoped>
.page-content {
  @apply px-4;

  @screen lg {
    @apply mx-auto;
    max-width: 800px;
  }
}

.toggle-header {
  @apply sticky top-0;

  @screen md {
    @apply hidden;
  }
}
</style>