import { mount } from "@vue/test-utils";
import Layout from "./Layout.vue";

test("layout default slot", () => {
  const wrapper = mount(Layout, {
    slots: {
      default: "Main Content",
    },
  });

  // expect(wrapper.html()).toContain("Main Content");
  expect(wrapper.find("main").text()).toContain("Main Content");
});

test("layout multiple slots", () => {
  const wrapper = mount(Layout, {
    slots: {
      default: ['<div id="one">One</div>', '<div id="two">Two</div>'],
    },
  });

  expect(wrapper.find("#one").exists()).toBe(true);
  expect(wrapper.find("#two").exists()).toBe(true);
});
