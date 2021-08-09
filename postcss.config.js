module.exports = (ctx) => { // ctx→context
  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: ctx.env === "production" ? {} : false, // ctx.env→node.envの値が入る
    },
  };
};
