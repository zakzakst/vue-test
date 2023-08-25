const App = {
  directives: {
    Tooltip,
  },
  template: '<h1 v-tooltip title="Welcome tooltip">Welcome to Vue.js 3</h1>',
};

test("stubs component with custom template", () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        // vTooltip: true,
        vTooltip: {
          beforeMount(el) {
            console.log("directive called");
            el.classList.add("with-tooltip");
          },
        },
      },
    },
  });

  console.log(wrapper.html());

  expect(wrapper.html()).toContain("Welcome to Vue.js 3");
  expect(wrapper.classes("with-tooltip")).toBe(true);
});
