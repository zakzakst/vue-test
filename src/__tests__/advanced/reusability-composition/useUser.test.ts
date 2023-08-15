import { mount, flushPromises } from "@vue/test-utils";
import { defineComponent } from "vue";
import { useUser } from "./useUser";
import axios from "axios";

jest.spyOn(axios, "get").mockResolvedValue({ data: { id: 1, name: "User" } });

test("fetch user on mount", async () => {
  const TestComponent = defineComponent({
    props: {
      userId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      return {
        ...useUser(props.userId),
      };
    },
  });

  const wrapper = mount(TestComponent, {
    props: {
      userId: 1,
    },
  });

  expect(wrapper.vm.user).toBeUndefined();

  await flushPromises();

  expect(wrapper.vm.user).toEqual({ id: 1, name: "User" });
});
