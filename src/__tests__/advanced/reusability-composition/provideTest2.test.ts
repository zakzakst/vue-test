import { mount } from "@vue/test-utils";
import { defineComponent, inject } from "vue";
import ProvideTest from "./ProvideTest2.vue";

test("provides correct data", () => {
  const TestComponent = defineComponent({
    template: '<span id="provide-test">{{value}}</span>',
    setup() {
      const value = inject("my-key");
      return { value };
    },
  });

  const wrapper = mount(ProvideTest, {
    global: {
      stubs: {
        SomeChild: TestComponent,
      },
    },
  });

  expect(wrapper.find("#provide-test").text()).toBe("some-data");
});

// NOTE: このテストはどこで利用するのか、ちょっと理解できなかった（※子コンポーネントを操作せずに親コンポーネントの挙動のみテストしたい的な？）
// If your component does not contain a slot you can use a stub and replace a child component with your test helper:
