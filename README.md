This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

The application is built after refering to the docs from [React JS Documentation](https://reactjs.org/docs/thinking-in-react.html).

Apart from the given instructions I have made a few enhancements to the application. They are,

1. Included CSS Styles to the front end view.
2. The search functionality of the application provided in the document is case sensity, I have enhanced the code to make a search irrespective of the search        text case.
3. The data provided for the application in the document is in an order, the json array is provided in such a way that all the objects related to a specific        category are placed sequentially. I have considered a scenario where the json array is jumbled and the objects are present in an order irrespective of      their      category.

## Snapshots of the application

[Complete list of products displayed](https://user-images.githubusercontent.com/68134797/93006715-6d9fb680-f525-11ea-9aac-c93d5f6d0373.png)

[List of porducts based on search (search text is in lower case)](https://user-images.githubusercontent.com/68134797/93006708-637db800-f525-11ea-9e22-22fee099ebb6.png)

[List of products based on search (search text is in upper case)](https://user-images.githubusercontent.com/68134797/93006818-a2f8d400-f526-11ea-87c4-6c3f27b3f601.png)

[List of products when the stocked check box is checked](https://user-images.githubusercontent.com/68134797/93006711-68426c00-f525-11ea-94af-efbcb7ac504e.png)

[List of products when check box is checked and a search is made](https://user-images.githubusercontent.com/68134797/93006851-fbc86c80-f526-11ea-84c3-f5c056b3a0ef.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
