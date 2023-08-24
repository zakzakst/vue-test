import { defineComponent, onServerPrefetch, ref } from "vue";
import { renderToString } from "@vue/test-utils";

function fakeFetch(text: string) {
  return Promise.resolve(text);
}

const Component = defineComponent({
  template: "<div>{{ text }}</div>",
  setup() {
    const text = ref<string | null>(null);

    onServerPrefetch(async () => {
      text.value = await fakeFetch("onServerPrefetch");
    });

    return { text };
  },
});

it("renders the value returned by onServerPrefetch", async () => {
  const contents = await renderToString(Component);
  expect(contents).toBe("<div>onServerPrefetch</div>");
});
