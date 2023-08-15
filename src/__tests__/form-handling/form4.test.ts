// TODO: 上手くいかない。今度やる
import { mount } from "@vue/test-utils";
import Form from "./Form4.vue";

test("fills in the form", async () => {
  const wrapper = mount(Form);
  const input = wrapper.find(".text-input input");

  await input.setValue("text");

  // TODO: 時間あるときtypescript対応のしかた調べてみる
  // @ts-ignore
  expect(input.element.value).toBe("text");
});
