// Sort Array without inbuilt
function getLength(arr: number[] = [4, 2, 6, 1, 9, 3]): number {
    let index: number = 0;
    while (arr[index] !== undefined) {
        index += 1;
    }
    return index;
}

function sortArray(arr: number[] = [4, 2, 6, 1, 9, 3]): number[] {
    let isSorted: boolean = false;
    getLength(arr);

    while (!isSorted) {
        isSorted = true;

        for (let i = 1; i < getLength(arr); i++) {
            if (arr[i - 1] > arr[i]) {
                let swap = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = swap;
                isSorted = false;
            }
        }
    }
    console.log(arr);
    return arr;
}
sortArray();

// What is event loop?

// What is promise?

// How many types of variables?

// How we are able to change the const array?

// == vs ===

// In React  how many ways to transfer between componenets?

// Is is possible to pass data from child to parent?

// How to implement the context api ?

// React Fregments ?

// What is controlled componenets ?

// What are disadvantages of class components ?

// How to manage state in functional component ?

// useReducer

// what is Virtual DOM ?

// what is HOC ?

// what is hook ?

// ways to optimize the react app ?

// What is memo ?

// what is SSR ?

// what is pure componenets?

// ways to implement api in react?

// what is composition in react ?

// how to implement multiple inheritance ?

// What is arrow function ?

// Typescript




// .... ANSWERS ....
// 1. What is event loop?
// The event loop is a mechanism in JavaScript that handles asynchronous operations.
// It continuously checks the call stack and the message queue, ensuring non-blocking execution
// by pushing callbacks from the queue to the call stack when it's empty.

// 2. What is promise?
// A Promise in JavaScript represents a value that may be available now, or in the future, or never.
// It has three states: pending, resolved (fulfilled), and rejected.

// 3. How many types of variables?
// JavaScript has three types of variables:
// 1. var (function-scoped)
// 2. let (block-scoped)
// 3. const (block-scoped, immutable reference)

// 4. How we are able to change the const array?
// While the reference of a const array cannot be changed, its contents (elements) can be modified.
// const arr = [1, 2, 3];
// arr.push(4); // Allowed
// arr = [5, 6, 7]; // Not allowed

// 5. == vs ===
// == checks only value equality (performs type coercion), whereas === checks both value and type equality.

// 6. In React how many ways to transfer data between components?
// 1. Props
// 2. Context API
// 3. Redux / Zustand / Recoil (State Management Libraries)
// 4. URL Parameters
// 5. LocalStorage / SessionStorage / Cookies

// 7. Is it possible to pass data from child to parent?
// Yes, by passing a function from parent to child as a prop and invoking it in the child component.

// 8. How to implement the context API?
// Using React.createContext() and useContext() hook.

// 9. What are React Fragments?
// A feature that lets you return multiple elements without adding an extra DOM node.
// <>...</>

// 10. What is a controlled component?
// A component where form input values are controlled by React state.

// 11. What are disadvantages of class components?
// 1. More boilerplate code
// 2. Harder to read and maintain
// 3. No built-in hooks (before React 16.8)
// 4. Slower performance compared to functional components

// 12. How to manage state in functional components?
// Using the useState or useReducer hook.

// 13. What is useReducer?
// A hook used for complex state management in functional components.
// const [state, dispatch] = useReducer(reducer, initialState);

// 14. What is Virtual DOM?
// A lightweight JavaScript representation of the actual DOM used to optimize rendering.

// 15. What is HOC (Higher Order Component)?
// A function that takes a component and returns a new component with additional functionality.

// 16. What is a hook?
// Functions that allow functional components to use state and lifecycle features (e.g., useState, useEffect).

// 17. Ways to optimize a React app?
// 1. Using React.memo
// 2. Lazy loading components
// 3. Avoiding unnecessary re-renders
// 4. Optimizing useEffect dependencies
// 5. Using useCallback and useMemo

// 18. What is memo?
// React.memo is a higher-order component that prevents unnecessary re-renders by memoizing a component.

// 19. What is SSR (Server-Side Rendering)?
// Rendering a React app on the server and sending fully rendered HTML to the client.

// 20. What is a pure component?
// A component that only re-renders when its props or state change.

// 21. Ways to implement API calls in React?
// 1. Using fetch()
// 2. Using Axios
// 3. Using React Query / SWR
// 4. Using useEffect for lifecycle-based API calls

// 22. What is composition in React?
// The practice of structuring components by nesting them rather than using inheritance.

// 23. How to implement multiple inheritance?
// JavaScript does not support multiple inheritance, but we can use composition or mixins.

// 24. What is an arrow function?
// A shorter syntax for writing functions, does not have its own 'this'.
// const add = (a, b) => a + b;
