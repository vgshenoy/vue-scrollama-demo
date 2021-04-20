<template>
  <div id="app">
    <div class="bg-gray-500 text-gray-100 text-center pt-12 pb-4">
      <div>
        <h3 class="text-3xl uppercase mb-4 font-mono">Vue-Scrollama</h3>
        <h4 class="text-md">
          A Vue component to easily setup scroll-driven interactions (aka
          scrollytelling).
        </h4>
      </div>
      <div class="my-10 flex justify-center">
        <a href="https://github.com/vgshenoy/vue-scrollama" target="_blank">
          <button
            class="bg-gray-200 text-gray-800 rounded shadow-xl flex items-center p-2 mx-4"
          >
            <img class="h-6 w-6" src="@/assets/github.png" alt="Github" />
            <span class="ml-2">Github</span>
          </button>
        </a>
        <a
          href="https://codesandbox.io/search?query=vue-scrollama%20vgshenoy&page=1&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=vue-scrollama&configure%5BhitsPerPage%5D=12"
          target="_blank"
        >
          <button
            class="bg-gray-200 text-gray-800 rounded shadow-xl flex items-center p-2 mx-4"
          >
            <img
              class="h-6 w-6"
              src="@/assets/codesandbox.png"
              alt="Codesandbox"
            />
            <span class="ml-2">Codesandbox</span>
          </button>
        </a>
      </div>
      <div class="my-10">
        Choose an example and start scrolling. Code for this page can be found
        <a href="https://github.com/vgshenoy/vue-scrollama-demo" target="_blank"
          >here</a
        >.
      </div>
      <nav class="text-lg">
        <router-link
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          v-slot="{ isActive, href }"
        >
          <a
            :href="href"
            class="px-4 pb-4 no-underline"
            :class="{ 'font-bold border-b-2 border-white': isActive }"
            >{{ route.meta.title }}</a
          >
        </router-link>
      </nav>
    </div>

    <router-view class="w-full max-w-3xl mx-auto px-8" />

    <div
      class="fixed left-0 w-full h-0 border border-dashed border-gray-400"
      :style="{ top: triggerTop + 'px' }"
    >
      <p>Offset: {{ $store.offset }}</p>
    </div>

    <div
      class="bg-gray-500 text-gray-100 flex justify-center items-center py-16 mt-64"
    >
      <p>
        <strong>vue-scrollama</strong> by
        <a href="https://vigneshenoy.com">Vignesh Shenoy</a>. License
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
    </div>
  </div>
</template>

<script>
import routes from "./router/routes";

export default {
  data() {
    return {
      routes,
    };
  },
  computed: {
    triggerTop() {
      return this.$store.offset * window.innerHeight;
    },
  },
};
</script>
