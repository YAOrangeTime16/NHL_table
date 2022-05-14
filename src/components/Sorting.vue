<template>
  <div class="sorting">
    <div class="select-wrapper">
      <label :for="model.fieldId" class="select-label" :aria-label="model.fieldLabel"></label>
      <select
        name="sort-dropdown"
        :id="model.fieldId"
        v-model="model.selected"
        class="select-input"
        @change="$emit('selected', model.selected)"
      >
        <option
          v-for="(option, index) in model.options"
          :key="index"
          :value="option.id"
          :selected="model.selected === option.id"
        >
          {{ option.label }}
        </option>
      </select>
    </div>

    <div class="radio-wrapper">
      <input type="radio" id="asc" value="asc" class="radio-input" v-model="radioModel" />
      <label
        @click="$emit('radio-change', 'asc')"
        for="asc"
        class="radio-label radio-1"
        :class="{'bg-gray-500 text-white': radioModel === 'asc'}"
        aria-label="ascending"
      ><SortNumericAscending /></label>

      <input type="radio" id="dsc" value="dsc" class="radio-input" v-model="radioModel" />
      <label
        @click="$emit('radio-change', 'dsc')"
        for="dsc"
        class="radio-label radio-2"
        :class="{'bg-gray-500 text-white': radioModel === 'dsc'}"
        aria-label="descending"
      ><SortNumericDescending /></label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SortNumericAscending from "vue-material-design-icons/SortNumericAscending.vue";
import SortNumericDescending from "vue-material-design-icons/SortNumericDescending.vue"
import { ISelectInputModel } from "../typings/";


@Component({
  components: {
    SortNumericAscending,
    SortNumericDescending
  }
})
export default class Sorting extends Vue {
  protected model: ISelectInputModel =
    {
      selected: "Standing",
      fieldLabel: "Sort By ",
      fieldId: "sort",
      options: [
        {
          id: "Standing",
          label: "Standing"
        },
        {
          id: "W",
          label:"W: Wins"
        },
        {
          id: "L",
          label:"L: Losses"
        },
        {
          id: "GF",
          label:"GF: Goals for"
        },
        {
          id: "GA",
          label:"GA: Goals against"
        },
        {
          id: "GD",
          label:"GD: Goals difference"
        },
        {
          id: "GP",
          label:"GP: Game played"
        },
        {
          id: "OTL",
          label:"OTL"
        },
        {
          id: "OTW",
          label:"OTW"
        },
        {
          id: "PPG",
          label:"PPG"
        },
        {
          id: "PTS",
          label:"PTS"
        }
      ]
    }

  protected radioModel = "asc"

}
</script>
<style lang="scss" scoped>
.sorting {
  @apply grid grid-cols-3 gap-4 my-4;

  @screen xl {
    @apply grid-cols-5;
  }
}

.select-wrapper {
  @apply w-full flex items-center col-span-2;
}

.select-label {
  @apply inline-block w-0;
}

.select-input {
  @apply border border-gray-400 p-2 w-full;
}

.radio-wrapper {
  @apply flex;
}

.radio-input {
 @apply opacity-0 fixed w-0;
}

.radio-label {
  @apply flex items-center justify-center;
  @apply border-t-2 border-l-2 border-b-2 border-gray-500;
  @apply py-1 w-full transition cursor-pointer;

  &.radio-2 {
    @apply border-r-2 ;
  }

  @screen md {
    @apply py-0;
  }
}

</style>