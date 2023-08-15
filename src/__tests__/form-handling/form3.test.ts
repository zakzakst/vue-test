import { mount } from "@vue/test-utils";
import Form from "./Form3.vue";

test("emits an event only if you lose focus to a button", () => {
  const wrapper = mount(Form);

  const componentToGetFocus = wrapper.find("button");

  wrapper.find("input").trigger("blur", {
    relatedTarget: componentToGetFocus.element,
  });

  expect(wrapper.emitted("focus-lost")).toBeTruthy();
});
