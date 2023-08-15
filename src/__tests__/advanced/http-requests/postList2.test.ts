import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
import PostList from "./PostList2.vue";

const mockPostList = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
];

jest.spyOn(axios, "get").mockResolvedValue(mockPostList);

test("displays loading state on button click", async () => {
  const wrapper = mount(PostList);

  expect(wrapper.find('[role="alert"]').exists()).toBe(false);
  expect(wrapper.get("button").attributes()).not.toHaveProperty("disabled");

  console.log("before click");
  await wrapper.get("button").trigger("click");
  console.log("after click");

  // TODO: ここでエラーが出てしまう。PostList2側の「await axios.get("/api/posts");」が即時解決している？
  console.log("before loading test");
  expect(wrapper.find('[role="alert"]').exists()).toBe(true);
  expect(wrapper.get("button").attributes()).toHaveProperty("disabled");
  console.log("after loading test");

  await flushPromises();

  expect(wrapper.find('[role="alert"]').exists()).toBe(false);
  expect(wrapper.get("button").attributes()).not.toHaveProperty("disabled");
});
