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
            <h3 class="body-header">STANDING</h3>
            {{ content.position }}
            <h3 class="body-header">COUNTRY</h3>
            {{ content.country }}
            <h3 class="body-header">DIVISION</h3>
            {{ content.division }}
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
}
</script>
<style lang="scss" scoped>
.mask {
  @apply fixed w-full h-full;
  z-index: 500;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.wrapper {
  @apply fixed w-full;
  top: 0;
  left: 0;
  z-index:1000;
}

.container {
  @apply w-1/2 my-12 bg-white rounded-md my-0 mx-auto shadow transition-all duration-500 overflow-hidden;
}

.header {
  @apply w-full font-bold bg-gray-800 text-gray-100 py-2;
}

.body {
  @apply my-12 px-12;

  .body-header {
    @apply font-bold;
  }
}

.footer {
  @apply w-full bg-gray-200 py-2 text-gray-600;
}

.side {
  @apply px-4
}

.enter {
  opacity: 0;
}

.leave-active {
  opacity: 0;
}

.enter .container,
.leave-active .container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>