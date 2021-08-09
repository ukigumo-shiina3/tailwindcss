module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  // index.htmlで使われているtailwind cssのクラス以外を削除(未使用クラスの削除)
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
