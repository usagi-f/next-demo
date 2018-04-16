{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "globals": {
    "document": true,
    "window": true,
    "process": true
  },
  "rules": {
    "semi": ["error", "never"],
    "no-console": 0,
    "react/jsx-filename-extension": [1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "jsx-a11y/anchor-is-valid": ["off"]
  }
}
