import { mount } from "@vue/test-utils";
import ComponentWithSlots from "./ComponentWithSlots.vue";

test("scoped slots", () => {
  const wrapper = mount(ComponentWithSlots, {
    slots: {
      scoped: `
        <template #scoped="scope">
          Hello {{ scope.msg }}
        </template>
      `,
    },
  });

  expect(wrapper.html()).toContain("Hello world");
});
