import { mount } from "@vue/test-utils";
import InjectTest from "./InjectTest.vue";

test("renders correct data", () => {
  const wrapper = mount(InjectTest, {
    global: {
      provide: {
        "my-key": "some-data",
      },
    },
  });
  expect(wrapper.text()).toBe("some-data");
});
