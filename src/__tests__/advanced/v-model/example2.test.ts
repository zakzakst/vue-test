import { mount } from "@vue/test-utils";

const MoneyEditor = {
  template: `
    <div>
      <input :value="currency" @input="$emit('update:currency', $event.target.value)" />
      <input :value="modelValue" type="number" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
  `,
  props: ["currency", "modelValue"],
  emits: ["update:currency", "update:modelValue"],
};

test("modelValue and currency should be updated", async () => {
  const wrapper = mount(MoneyEditor, {
    props: {
      modelValue: "initialText",
      "update:modelValue": (e: any) => wrapper.setProps({ modelValue: e }),
      currency: "$",
      "update:currency": (e: any) => wrapper.setProps({ currency: e }),
    },
  });

  const [currencyInput, modelValueInput] = wrapper.findAll("input");
  await modelValueInput.setValue("test");
  await currencyInput.setValue("£");

  expect(wrapper.props("modelValue")).toBe("test");
  expect(wrapper.props("currency")).toBe("£");
});

// TODO: 上手く動かなかった。。一旦保留
