import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";

let router;

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });

  router.push("/");
  await router.isReady();
});

test("allows authenticated user to edit a post", async () => {
  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true,
    },
    global: {
      plugins: [router],
    },
  });

  const push = jest.spyOn(router, "push");
  await wrapper.find("button").trigger("click");

  expect(push).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenCalledWith("/posts/1/edit");
});
