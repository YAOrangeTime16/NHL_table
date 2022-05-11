<template>
  <div>
    <label :for="model.label">{{model.label}}</label>
    <select
      name="sort-dropdown"
      :id="model.label"
      v-model="model.selected"
      class="input-field-frame"
      @change="$emit('selected', model.selected)"
    >
      <option
        v-for="option in model.options"
        :key="option"
        :value="option"
        :selected="model.selected === option"
      >
        {{ option }}
      </option>
    </select>


    <input type="radio" id="asc" value="asc" v-model="radioModel" />
    <label for="asc">TOP->BOTTOM</label>

    <input type="radio" id="dsc" value="dsc" v-model="radioModel" />
    <label for="dsc">BOTTOM->TOP</label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component
export default class Filtering extends Vue {
  protected model =
    {
      selected: "PPG",
      label: "sort",
      options: ["Standing", "W", "L", "PPG"]
    }

  protected radioModel = "asc"

}
</script>
<style lang="scss">
.input-field-frame {
  @apply border border-gray-400 p-2;
}

</style>