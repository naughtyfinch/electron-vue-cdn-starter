export default {
  props: ["name", "version"],
  template: `<span class="col-2">{{ name }}</span><span class="text-secondary col-10">{{ version }}</span>`,
};
