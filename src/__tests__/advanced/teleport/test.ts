import { mount } from "@vue/test-utils";
import Navbar from "./Navbar.vue";
import Signup from "./Signup.vue";

beforeEach(() => {
  const el = document.createElement("div");
  el.id = "modal";
  document.body.appendChild(el);
});

afterEach(() => {
  // この例では Jest を使用していますが、テストごとに DOM をリセットするわけではありません。このため、各テストの後に afterEach を使用してクリーンアップすることをお勧めします
  document.body.outerHTML = "";
});

test("teleport", async () => {
  const wrapper = mount(Navbar);

  // 実際の HTML は外部にテレポートされますが、関連付けられた仮想 DOM は<Navbar>元のコンポーネントへの参照を維持していることがわかります。
  const signup = wrapper.getComponent(Signup);
  await signup.get("input").setValue("valid_username");
  await signup.get("form").trigger("submit.prevent");

  expect(signup.emitted().signup[0]).toEqual(["valid_username"]);
});
