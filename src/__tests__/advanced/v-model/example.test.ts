import { mount } from "@vue/test-utils";

const Editor = {
  props: {
    label: String,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  template: `
    <div>
      <label>{{label}}</label>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
  `,
};

test("modelValue should be updated", async () => {
  const wrapper = mount(Editor, {
    props: {
      modelValue: "initialText",
      "onUpdate:modelValue": (e: any) => wrapper.setProps({ modelValue: e }),
    },
  });

  await wrapper.find("input").setValue("test");
  expect(wrapper.props("modelValue")).toBe("test");
});
