import { mount } from "@vue/test-utils";
import Component from "./Component.vue";

test("works with transitions", async () => {
  const wrapper = mount(Component);

  expect(wrapper.find("hello").exists()).toBe(false);

  await wrapper.find("button").trigger("click");

  expect(wrapper.get("p").text()).toEqual("hello");
});
