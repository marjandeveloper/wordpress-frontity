const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\mn-blog-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "mn-blog-theme",
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
