<template>
  <div>
    <div
      class="graphic sticky top-0 bg-gray-300 border border-black mt-20 flex items-center justify-center text-8xl"
    >
      {{ activeStepId }}
    </div>
    <Scrollama
      id="sticky-graphic-1"
      :offset="$store.offset"
      @step-enter="stepEnterHandler"
      class="relative"
    >
      <div
        v-for="step in steps"
        :key="step.id"
        :data-step-id="step.id"
        class="step my-64 h-48 w-48 mx-auto bg-yellow-300 border border-black flex justify-center items-center"
        @step-enter="stepEnterHandler"
      >
        Step {{ step.id }}
      </div>
    </Scrollama>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [{ id: "A" }, { id: "B" }, { id: "C" }, { id: "D" }],
      activeStepId: "A",
    };
  },
  methods: {
    stepEnterHandler({ element, direction, index }) {
      console.log("step-enter", { element, direction, index });
      this.activeStepId = element.dataset.stepId;
    },
  },
};
</script>

<style scoped>
.graphic {
  height: 80vh;
}
</style>
