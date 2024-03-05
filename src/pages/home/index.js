import version from "../../components/version.js";

export default {
  components: {
    version,
  },
  data() {
    return {
      message: "Welcome 👋 to Electron with Vue!",
      versions: [],
    };
  },
  async mounted() {
    this.versions = await window.api.getVersions();
    this.versions.push({
      name: "Vue",
      version: Vue.version,
    });
  },
  template: `
  <div class="container pt-5">
    <h1>{{ message }}</h1>
    <h3 class="pt-3 pb-2">Using versions:</h3>
    <p class="row pb-1 my-0" v-for="item in versions">
      <version :name="item.name" :version="item.version"></version>
    </p>
  </div>
  `,
};
