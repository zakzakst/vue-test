import { mount } from "@vue/test-utils";
import TodoApp from "./TodoApp.vue";

test("renders a todo", () => {
  // arrange
  const wrapper = mount(TodoApp);

  // assert
  const todo = wrapper.get('[data-test="todo"]');
  expect(todo.text()).toBe("Learn Vue.js 3");
});

test("creates a todo", async () => {
  // arrange
  const wrapper = mount(TodoApp);
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

  // act
  await wrapper.get('[data-test="new-todo"]').setValue("New todo");
  await wrapper.get('[data-test="form"').trigger("submit");

  // assert
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
});

test("complete a todo", async () => {
  // arrange
  const wrapper = mount(TodoApp);

  // act
  await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

  // assert
  expect(wrapper.get('[data-test="todo"').classes()).toContain("completed");
});
