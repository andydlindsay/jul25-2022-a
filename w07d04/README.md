# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

```js
useEffect(() => {}); // will be called on every render
useEffect(() => {}, [username]); // will be called on initial render and then only if `username` changes
useEffect(() => {}, []); // only calls the callback on startup/initial render
```

### Rules of Hooks
* don't call hooks conditionally; they have to be called top-level
* they have to be called inside a React function
* all hooks have to start with `use`

### Pure Function
* doesn't rely on anything from outside scope
* given the same arguments will return the same results
* they don't have side effects

```js
let addition = 20;
let something = null;

const addTwo = (num) => {
  something = 'hello';
  console.log(num);
  return num + addition;
};
```

### Side Effect Examples
* console.log
* making an API request
* web sockets
* modifying the DOM directly
* setTimeout and setInterval












