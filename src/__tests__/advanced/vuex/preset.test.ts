import { createStore } from "vuex";

// テストのために Vuex ストアを特定の状態にすると便利な場合があります。以外に使用できる便利なテクニックの 1 つは、初期状態をシードする関数を作成することです
const createVuexStore = (initialState: any) =>
  createStore({
    state: {
      count: 0,
      ...initialState,
    },
    mutations: {
      increment(state, value = 1) {
        state.count += value;
      },
    },
  });

test("increment mutation without passing a value", () => {
  const store = createVuexStore({ count: 20 });

  store.commit("increment");

  expect(store.state.count).toBe(21);
});

test("increment mutation with a value", () => {
  const store = createVuexStore({ count: -10 });

  store.commit("increment", 15);

  expect(store.state.count).toBe(5);
});
