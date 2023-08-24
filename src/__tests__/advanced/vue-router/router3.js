import { mount } from "@vue/test-utils";
import { useRouter, useRoute } from "vue-router";

const Component = {
  template: `<button @click="redirect">Click to Edit</button>`,
  props: ["isAuthenticated"],
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const redirect = () => {
      if (props.isAuthenticated) {
        router.push(`/posts/${route.params.id}/edit`);
      } else {
        router.push("/404");
      }
    };

    return {
      redirect,
    };
  },
};

// ==========

jest.mock("vue-router", () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(() => ({
    push: () => {},
  })),
}));

test("allows authenticated user to edit a post", async () => {
  useRoute.mockImplementationOnce(() => ({
    prams: {
      id: 1,
    },
  }));

  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true,
    },
    global: {
      stubs: ["router-link", "router-view"],
    },
  });

  await wrapper.find("button").trigger("click");
  expect(push).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenCalledWith("/posts/1/edit");
});

test("redirect an unauthenticated user to 404", async () => {
  useRoute.mockImplementationOnce(() => ({
    params: {
      id: 1,
    },
  }));

  const push = jest.fn();
  useRouter.mockImplementationOnce(() => ({
    push,
  }));

  await wrapper.find("button").trigger("click");
  expect(push).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenCalledWith("404");
});
