import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";
// import { nextTick } from "vue";

test("increments by 1", async () => {
  const wrapper = mount(Counter);

  // wrapper.find("button").trigger("click");
  // await nextTick();

  await wrapper.find("button").trigger("click");

  expect(wrapper.html()).toContain("Count: 1");
});

// TODO: 非同期のところ分からなかった、今度やる
// https://test-utils.vuejs.org/guide/advanced/async-suspense.html#resolving-other-asynchronous-behavior
