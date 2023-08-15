import { mount } from "@vue/test-utils";
import App from "./App.vue";
import { store } from "./store";

test("vuex", async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [store],
    },
  });

  await wrapper.find("button").trigger("click");

  expect(wrapper.html()).toContain("Count: 1");
});

test("vuex using a mock store", async () => {
  const $store = {
    state: {
      count: 25,
    },
    commit: jest.fn(),
  };

  const wrapper = mount(App, {
    global: {
      mocks: {
        $store,
      },
    },
  });

  expect(wrapper.html()).toContain("Count: 25");
  await wrapper.find("button").trigger("click");
  expect($store.commit).toHaveBeenCalled();
});
