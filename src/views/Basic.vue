<template>
  <div>
    <Scrollama
      :offset="$store.offset"
      @step-enter="stepEnterHandler"
      @step-exit="stepExitHandler"
    >
      <div
        v-for="step in steps"
        :key="step.id"
        :data-step-id="step.id"
        class="my-64 h-48 border border-black flex justify-center items-center"
        :class="{ 'bg-yellow-300': activeStepId === step.id }"
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
      activeStepId: null,
    };
  },
  methods: {
    stepEnterHandler({ element, direction, index }) {
      console.log("step-enter", { element, direction, index });
      this.activeStepId = element.dataset.stepId;
    },
    stepExitHandler({ element, direction, index }) {
      console.log("step-exit", { element, direction, index });
      this.activeStepId = null;
    },
  },
};
</script>
