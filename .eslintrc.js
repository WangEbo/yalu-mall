module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "rules": {
    "comma-dangle": ["warn", "always-multiline"],
    "indent": ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-undef": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/no-parsing-error": "off",
    "no-useless-escape": "off",
  },
};
