const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\wp-frontity\src\index.js</pre>
    </>
  );
};

export default {
  name: "wp-frontity",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
