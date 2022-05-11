<template>
  <main>
    <section class="page-content">
      <Modal v-show="isModalOpen" :modal-content="modalContent" @close="closeModal"/>
      <ToggleHeader />
      <Sorting @selected="tableSort" />
      <TableWrapper :team-by-conference="teamByConference" @modal-open="openModal"/>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Modal from "../Modal.vue";
import Sorting from '../Sorting.vue';
import ToggleHeader from '../ToggleHeader.vue';
import TableWrapper from '../TableWrapper.vue';
import { leagueStandings } from "../../mock-data"
import { listTeamsByCategory } from "../../utils/"
import { DataEntity, ITeamByConference } from "../../typings";
import { CONFERENCE } from "../../typings/enums";

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
    by: "",
    direction: "asc"
  }

  protected teamByConference: ITeamByConference = {
    [CONFERENCE.WESTERN]: [],
    [CONFERENCE.EASTERN]: [],
  };

  protected isModalOpen: boolean = false;
  protected modalContent = {};

  protected tableSort(value: string) {
    this.$set(this.sort, "by", value)
  }

  protected created() {
    //@TODO: call ajax to get team list row data.
    const {data} = leagueStandings
    this.teamByConference = listTeamsByCategory(data as DataEntity[]);
  }

  protected openModal(info) {
    this.modalContent = info;

    this.isModalOpen = true;
  }

  protected closeModal() {
    this.modalContent = {};
    this.isModalOpen = false;
  }
}
</script>
<style lang="scss" scoped>
.page-content {
  @apply px-4;

  @screen lg {
    @apply mx-auto;
    max-width: 1000px;
  }
}
</style>