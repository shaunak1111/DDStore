The Project was created by Create React app and ejected using `npm run eject` to run linting and prettier.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br>

### `npm run test -- --coverage`

To test code coverage.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Voucher Codes

- DDFIVE (£5.00 off your order)
- DDTEN (£10.00 off when you spend over £50.00)
- DDFIFTEEN (£15.00 off when you have bought at least one footwear item and spent
  over £75.00)

# If the Voucher is Invalid or not as per the mentioned above an error message is shown

### `Decision to use React`

React just simply provides the View, therefore fast rendering.In a complex e-commerce application where the speed of execution matters, react is the choice.

### Decision to use Redux

- Redux has been used in app to maintain a central state.
- Updation of cart products has been made easier due to redux.
- The state is always updated and any component can get the current state,thus it relieves you of passing props from parent to child in case of nested components.

### Decision to use Material UI

- React Material UI gives you ready made responsive React components.
- Flexbox CSS model ensures writing less media queries.

### Decision to use Css In Jss

- The compiles styles are cached, therefore fast rendering
- Simple class selectors ensure high selectors performance
- Collision-free selectors therefore no use of **CSS methologies like BEM**.

### Linting and Prettier

## To ensure code quality control eslint has been added

- Some es lint rules have been commented out due to conflicts with prettier.
- The linting rules are present at .eslintrc.json
- `npm run eslint-check` to check conflicts.Exits with an error code 2 if a conflict
- Some es-lint rules have also been commentedat file level.Example no-udef rule in cart.js file

## To automatically save and prettify code Prettier has been added

- Open VS Code settings (ctrl + ,) and change this to "editor.formatOnSave": true
- Now on auto saving files code will be prettified according to es-lint rules

### Rest Services

[https://demo2985786.mockable.io/getAllproducts](https://demo2985786.mockable.io/getAllproducts) is the url to get mock data

### Test Cases

A simple test case has been added to render App component

Code coverage
