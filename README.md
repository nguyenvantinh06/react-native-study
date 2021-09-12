# react-native-study

Props is short for “properties”. Props let you customize React components. For example, here you pass each <Cat> a different name for Cat to render.

Notice the double curly braces {{ }} surrounding style‘s width and height. In JSX, JavaScript values are referenced with {}. This is handy if you are passing something other than a string as props, like an array or number: <Cat food={["fish", "kibble"]} age={2} />. However, JS objects are also denoted with curly braces: {width: 200, height: 200}. Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: {{width: 200, height: 200}}

State#
While you can think of props as arguments you use to configure how components render, state is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!

As a general rule, use props to configure a component when it renders. Use state to keep track of any component data that you expect to change over time.

You can add state to a component by calling React’s useState Hook. A Hook is a kind of function that lets you “hook into” React features. For example, useState is a Hook that lets you add state to function components. You can learn more about other kinds of Hooks in the React documentation.