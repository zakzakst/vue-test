import { mount } from "@vue/test-utils";

test("renders a greeting", () => {
  const Comp = {
    template: `<div>{{ msg1 }} {{ msg2 }}</div>`,
    props: ["msg1"],
    data() {
      return {
        msg2: "world",
      };
    },
  };

  const wrapper = mount(Comp, {
    props: {
      msg1: "hello",
    },
  });

  console.log(wrapper.vm);

  expect(wrapper.html()).toContain("hello world");
});

test("assets correct props are passed", () => {
  const Foo = {
    props: ["msg"],
    template: `<div>{{ msg }}</div>`,
  };

  const Comp = {
    components: { Foo },
    template: `<div><foo msg="hello world" /></div>`,
  };

  const wrapper = mount(Comp);

  expect(wrapper.getComponent(Foo).vm.msg).toBe("hello world");
  expect(wrapper.getComponent(Foo).props()).toEqual({ msg: "hello world" });
});
