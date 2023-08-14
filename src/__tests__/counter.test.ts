import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

test("emits an event when clicked", () => {
  const wrapper = mount(Counter);

  wrapper.find("button").trigger("click");
  wrapper.find("button").trigger("click");

  // expect(wrapper.emitted()).toHaveProperty("increment");

  const incrementEvent = wrapper.emitted("increment");

  expect(incrementEvent).toHaveLength(2);
  if (incrementEvent?.length && incrementEvent.length >= 1) {
    expect(incrementEvent[0]).toEqual([1]);
    expect(incrementEvent[1]).toEqual([2]);
  }
});

test("emits an event with count when clicked", () => {
  const wrapper = mount(Counter);

  wrapper.find("button").trigger("click");
  wrapper.find("button").trigger("click");

  const incrementEvent = wrapper.emitted("increment");

  expect(incrementEvent).toHaveLength(2);

  if (incrementEvent?.length && incrementEvent.length >= 1) {
    expect(incrementEvent[0]).toEqual([
      {
        count: 1,
        isEven: false,
      },
    ]);
    expect(incrementEvent[1]).toEqual([
      {
        count: 2,
        isEven: true,
      },
    ]);
  }
});
