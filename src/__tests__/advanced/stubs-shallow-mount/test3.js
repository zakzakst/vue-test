import { defineComponent } from "vue";

const App = defineComponent({
  components: {
    MyComponent: defineAsyncComponent(() => import("./AsyncComponent")),
  },
  template: "<MyComponent />",
});

test("stubs async component without resolving", async () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        MyComponent: true,
      },
    },
  });

  await flushPromises();

  expect(wrapper.html()).toBe("<my-component-stub></my-component-stub>");
});
