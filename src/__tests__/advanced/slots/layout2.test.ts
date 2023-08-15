import { mount } from "@vue/test-utils";
import Layout from "./Layout2.vue";

test("layout full page layout", () => {
  const wrapper = mount(Layout, {
    slots: {
      header: "<div>Header</div>",
      main: "<div>Main Content</div>",
      footer: "<div>Footer</div>",
    },
  });

  expect(wrapper.html()).toContain("<div>Header</div>");
  expect(wrapper.html()).toContain("<div>Main Content</div>");
  expect(wrapper.html()).toContain("<div>Footer</div>");
});
