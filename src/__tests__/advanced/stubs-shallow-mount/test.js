const FetchDataFromApi = {
  name: "FetchDataFromApi",
  template: `<div>{{ result }}</div>`,
  async mounted() {
    const res = await axios.get("/api/info");
    this.result = res.data;
  },
  data() {
    return {
      result: "",
    };
  },
};

const App = {
  components: {
    FetchDataFromApi,
  },
  template: `
    <h1>Welcome to Vue.js 3</h1>
    <fetch-data-from-api />
  `,
};

test("stubs component with custom template", () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        // FetchDataFromApi: {
        //   template: "<span />",
        // },

        // 独自のスタブを提供する代わりに、デフォルトのスタブを取得することもできます。
        FetchDataFromApi: true,
      },
    },
  });

  console.log(wrapper.html());

  expect(wrapper.html()).toContain("Welcome to Vue.js 3");
});
