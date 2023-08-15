import { createStore } from "vuex";

// NOTE: 特に複雑な場合は、Vuex のミューテーションまたはアクションを完全に分離してテストすることをお勧めします。Vuex ストアは単なる通常の JavaScript であるため、これには Vue Test Utils は必要ありません。
test("increment mutation", () => {
  const store = createStore({
    state: {
      count: 0,
    },
    mutations: {
      increment(state) {
        state.count += 1;
      },
    },
  });

  store.commit("increment");

  expect(store.state.count).toBe(1);
});
