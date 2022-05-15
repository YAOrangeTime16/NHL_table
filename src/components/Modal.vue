<template>
  <transition name="modal">
    <div>
      <div class="mask" @click="$emit('close')"></div>
      <div class="wrapper">
        <div class="container">
          <header class="header side">
            <h2>{{ teamName }}</h2>
          </header>

          <div class="body side">
            <h3 class="body-header">
              <span class="header-label">STANDING</span>
              <span>{{ content.position }}</span>
            </h3>

            <h3 class="body-header">
              <span class="header-label">COUNTRY</span>
              <span>{{ content.country }}</span>
            </h3>
            <h3 class="body-header">
              <span class="header-label">DIVISION</span>
              <span>{{ content.division }}</span>
            </h3>
            <div class="grid grid-cols-6 text-center text-xs md:grid-cols-11">
              <div
                v-for="(points, key, index) in stats"
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
          </div>
          <button class="footer" @click="$emit('close')">
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop()
  protected readonly modalContent: any;

  get teamName(): string {
    return this.modalContent.teamName;
  }

  get content(): {[key: string]: string} {
    return {
      position: this.modalContent.position,
      country: this.modalContent.team?.country?.name,
      division: this.modalContent.group
    };
  }

  get stats() {
    return this.modalContent.stats;
  }
}
</script>
<style lang="scss" scoped>
.mask {
  @apply fixed w-full h-full top-0 left-0 bg-black opacity-80 transition-opacity duration-300;
  z-index: 500;
}

.wrapper {
  @apply fixed w-full top-0 left-0;
  z-index:1000;
}

.container {
  @apply w-11/12 my-12 bg-white rounded-md my-0 mx-auto shadow transition-all duration-500 overflow-hidden;

  @screen md {
    @apply w-1/2;
  }

  @screen lg {
    @apply w-1/3;
  }
}

.header {
  @apply w-full font-bold bg-gray-800 text-gray-100 py-2;
}

.body {
  @apply my-8 px-12;

  .body-header {
    @apply border-b border-gray-300 mb-4;
  }

  .header-label {
    @apply font-bold mr-2;
  }
}

.footer {
  @apply w-full bg-gray-200 py-2 text-gray-600;
}

.side {
  @apply px-4
}

.enter {
  @apply opacity-0;
}

.leave-active {
  @apply opacity-0;
}

.enter .container,
.leave-active .container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>