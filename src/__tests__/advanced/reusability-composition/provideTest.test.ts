import { mount } from "@vue/test-utils";
import { defineComponent, inject, h } from "vue";
import ProvideTest from "./ProvideTest.vue";

test("provides correct data", () => {
  const TestComponent = defineComponent({
    template: '<span id="provide-test">{{value}}</span>',
    setup() {
      const value = inject("my-key");
      return { value };
    },
  });

  const wrapper = mount(ProvideTest, {
    slots: {
      default: () => h(TestComponent),
    },
  });

  expect(wrapper.find("#provide-test").text()).toBe("some-data");
});
