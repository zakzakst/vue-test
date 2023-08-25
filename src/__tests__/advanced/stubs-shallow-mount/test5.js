import { config, mount } from "@vue/test-utils";

const CustomButton = {
  template: `
    <button>
      <slot />
    </button>
  `,
};

const App = {
  props: ["authenticated"],
  components: { CustomButton },
  template: `
    <custom-button>
      <div v-if="authenticated">Log out</div>
      <div v-else>Log in</div>
    </custom-button>
  `,
};

beforeAll(() => {
  config.global.renderStubDefaultSlot = true;
});

afterAll(() => {
  config.global.renderStubDefaultSlot = false;
});

test("shallow with stubs", () => {
  const wrapper = mount(AnotherApp, {
    props: {
      authenticated: true,
    },
    shallow: true,
  });

  expect(wrapper.html()).toContain("Log out");
});
