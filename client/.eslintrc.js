module.exports = {
  "parser": "babel-eslint",
	// "parser": "typescript-eslint-parser", // I think this is a pre-babel 7 thing?
  "parserOptions": {
    "typescript": true
  },
  "extends": [
    "airbnb"
  ],
  "plugins": [
    "typescript",
    "react",
    "jsx-a11y",
    "import"
  ],
  "settings": {
    "import/extensions": [
      "error",
      "never",
      {
        "ts": "never",
        "tsx": "never",
      }
    ],
    "import/parsers": {
      "typescript-eslint-parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "webpack": {
        "config": "./webpack.config.js",
      }
    }
  },
  "rules": {
    "import/first": 0, // seems like an arbitrary rule TODO research rationale
    "jsx-a11y/anchor-is-valid": 0, // doesnt like routes helper.
    "function-paren-newline": 0, // doesn't play well with single arg functions https://github.com/eslint/eslint/issues/9286
    "no-tabs": 0,
    "indent": ["error", "tab"],
    "react/jsx-indent": [2, 'tab'],
    "react/jsx-indent-props": [2, 'tab'],
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }]
  },
  "env": {
    "browser": true,
  },
};
