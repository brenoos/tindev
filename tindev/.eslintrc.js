module.exports = {
  env: {
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react", "@react-native-community"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "semi": "off",
    'comma-dangle': "off",
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/accessible-emoji': 'off'
  }
};
