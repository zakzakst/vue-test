import { mount } from "@vue/test-utils";
import Component from "./Component.vue";

test("allows authenticated user to edit a post", async () => {
  const mockRoute = {
    params: {
      id: 1,
    },
  };
  const mockRouter = {
    push: jest.fn(),
  };
  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true,
    },
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
    },
  });

  await wrapper.find("button").trigger("click");

  expect(mockRouter.push).toHaveBeenCalledTimes(1);
  expect(mockRouter.push).toHaveBeenCalledWith("/posts/1/edit");
});

test("redirect an unauthenticated user to 404", async () => {
  const mockRoute = {
    params: {
      id: 1,
    },
  };
  const mockRouter = {
    push: jest.fn(),
  };
  const wrapper = mount(Component, {
    props: {
      isAuthenticated: false,
    },
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
    },
  });

  await wrapper.find("button").trigger("click");

  expect(mockRouter.push).toHaveBeenCalledTimes(1);
  expect(mockRouter.push).toHaveBeenCalledWith("/404");
});
