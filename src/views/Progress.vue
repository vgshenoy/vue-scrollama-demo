<template>
  <div>
    <Scrollama
      id="progress"
      :offset="$store.offset"
      :progress="true"
      @step-progress="stepProgressHandler"
    >
      <div
        v-for="step in steps"
        :key="step.id"
        :data-step-id="step.id"
        class="my-64 h-64 border border-black flex flex-col justify-center items-center"
        :style="{ 'background-color': `rgba(${step.rgb}, ${step.progress})` }"
      >
        <div>STEP {{ step.id }}</div>
        <div>{{ (step.progress * 100).toFixed(1) }}%</div>
      </div>
    </Scrollama>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { id: "A", rgb: "252, 211, 77", progress: 0 },
        { id: "B", rgb: "239, 68, 68", progress: 0 },
      ],
    };
  },
  methods: {
    stepProgressHandler({ element, progress, index }) {
      console.log("step-progress", { element, progress, index });
      const activeStepId = element.dataset.stepId;
      console.log(activeStepId);
      this.steps.find((d) => d.id === activeStepId).progress = progress;
    },
  },
};
</script>
