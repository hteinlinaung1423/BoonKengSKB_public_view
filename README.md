#### Technology Stack
* **Treasure Hunter Mini Game**
  * React 16
  * Webpack 4
  * Babel 7


#### Project Struture
All files are categorised and place according to their components. Shared will be thos files that will used across different components.
1. **src/actions**
    
    functions that will make API requests to the backend 

2. **src/components**
    
    Building blocks of any React app. React element that describes how a section of the UI (User Interface) should appear

3. **src/reducers**

    State management of the React app where it usually contains current state and action which is use to update the state.
    
4. **src/routers**
   
   Delcare the routing for the React app.
   
5. **src/context**

   Context provides a way to pass data through the component tree without having to pass props down manually at every level.
   
6. **src/styles**
   
   User Interfaces of the app. Use BEM (Block-Element-Modifier) naming rules.

7. **src/utils**
   
   Utilies functions that can be use across the whole app.
  

#### Others files
* **babelrc** - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
* **package.json** - Holds various metadata relevant to the project.
* **.env.development** - Load environment variables from this file.
* **webpack.config** - It is a static module bundler for modern JavaScript applications.

   
### References
* [React hooks app structure](https://www.relevantprogrammer.com/posts/todo-with-react-hooks/)
* [How to build a React Hooks front-end app with routing and authentication](https://www.freecodecamp.org/news/build-a-react-hooks-front-end-app-with-routing-and-authentication/)
* [Some Best Practices for Building a React App With Hooks](https://medium.com/better-programming/some-best-practices-for-building-a-react-app-with-hooks-d6157494f5c1)
* [BEM and SASS: A Perfect Match](https://medium.com/@andrew_barnes/bem-and-sass-a-perfect-match-5e48d9bc3894)

