const ComplexComponent = {
  components: {
    ComplexA,
    ComplexB,
    ComplexC,
  },
  template: `
    <h1>Welcome to Vue.js 3</h1>
    <ComplexA />
    <ComplexB />
    <ComplexC />
  `,
};

const wrapper = mount(ComplexComponent, {
  // VTU には、すべての子コンポーネントを自動的にスタブアウトするshallowマウントオプションがあります。
  shallow: true,
  global: {
    // stubs: {
    //   ComplexA: true,
    //   ComplexB: true,
    //   ComplexC: true,
    // }

    // 特定のコンポーネントのスタブ化を明示的にオプトアウトしたい場合は、その名前をstubs値にfalse設定して指定できます。
    stubs: {
      ComplexA: false,
    },
  },
});
