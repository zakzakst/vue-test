import { mount } from "@vue/test-utils";
import Form from "./Form.vue";

test("sets the value", async () => {
  const wrapper = mount(Form);
  const input = wrapper.find("input");

  await input.setValue("my@mail.com");

  expect(input.element.value).toBe("my@mail.com");
});

test("trigger", async () => {
  const wrapper = mount(Form);

  await wrapper.find("button").trigger("click");

  expect(wrapper.emitted()).toHaveProperty("submit");
});

test("emits the input to its parent", async () => {
  const wrapper = mount(Form);

  await wrapper.find("input").setValue("my@mail.com");
  await wrapper.find("button").trigger("click");

  // TODO: 時間あるときtypescript対応のしかた調べてみる
  // @ts-ignore
  expect(wrapper.emitted("submit")[0][0]).toBe("my@mail.com");
});
