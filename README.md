# react-redux-template

## Setup

Install **Vite** and **Degit** first:

```sh
npm install vite
npm install degit
```

Create a new project using official Redux+TS template for Vite:

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux react-redux-template
cd react-redux-template
npm install
npm run dev
```

Alternative:

```sh
npm create vite@latest -- --template react-ts
```

## Add Sass and Bootstrap

```sh
npm install -D sass
npm install bootstrap@latest
npm install bootstrap-icons

```

Create a custom scss with variable overrides and imports:
**src/styles/bootstrap-custom.scss**

```css
// Default variable overrides
// $modal-backdrop-bg: black;
// $modal-backdrop-opacity: 0.6;

$border-radius: 1px;
$dropdown-item-padding-y: 0.6rem;

// Bootstrap imports
@import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
@import "/node_modules/bootstrap/scss/bootstrap";
...
```

Import your custom scss:

```ts
import '/style/bootstrap-custom.scss'
```

## React-Router

```sh
npm install react-router-dom localforage match-sorter sort-by
```

## PropTypes

```sh
npm install --save prop-types
```

## GitHub Pages Deployment

---

---

---

---

---

---

---

---

---

---

# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
