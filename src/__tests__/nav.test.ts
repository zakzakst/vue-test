import { mount } from "@vue/test-utils";

const Nav = {
  template: `
    <nav>
      <a id="profile" href="/profile">My Profile</a>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
    </nav>
  `,
  data() {
    return {
      admin: false,
    };
  },
};

test("renders a profile link", () => {
  // arrange
  const wrapper = mount(Nav);

  // assert
  const profileLink = wrapper.get("#profile");
  expect(profileLink.text()).toEqual("My Profile");
});

test("does not render an admin link", () => {
  // arrange
  const wrapper = mount(Nav);

  // assert
  expect(wrapper.find("#admin").exists()).toBe(false);
});

test("renders an admin link", () => {
  // arrange
  const wrapper = mount(Nav, {
    data() {
      return {
        admin: true,
      };
    },
  });

  // assert
  expect(wrapper.get("#admin").text()).toEqual("Admin");
});

const Nav2 = {
  template: `
    <nav>
      <a id="user" href="/profile">My Profile</a>
      <ul v-show="shouldShowDropdown" id="user-dropdown"></ul>
    </nav>
  `,
  data() {
    return {
      shouldShowDropdown: false,
    };
  },
};

test("does not show the user dropdown", () => {
  const wrapper = mount(Nav2);
  expect(wrapper.get("#user-dropdown").isVisible()).toBe(false);
});
