## Question 1: What is JSX, and why is it used?

**JSX**  
JSX (JavaScript XML) is a special syntax used in React that lets you write **HTML-like code inside JavaScript**.

**Why it is used**
- Makes code easier to read and write  
- React uses JSX to render components faster and cleaner  

---

## Question 2: What is the difference between State and Props?

**State**
- Managed inside a component  
- Mutable (can change) using `setState` or `useState` in hooks  
- Used to store dynamic data that can change over time  

**Props**
- Short for Properties  
- Passed from parent to child component  
- Read-only  
- Used to send data into a component  

---

## Question 3: What is the useState hook, and how does it work?

**useState**  
- `useState` is a React Hook that adds state to a function component.  
- It makes components **dynamic & interactive**.  

**How it works**
- `useState` returns two things:  
  1. A **state variable** (holds the current value)  
  2. A **function** to update that value  
- Whenever we update the state using that function, React re-renders the component with the new value.  

---

## Question 4: How can you share state between components in React?

**Ways to Share State Between Components**
1. **Lift State Up** – Move state to the nearest common parent and pass it as props  
2. **Using Context API** – Share state globally without prop drilling  

---

## Question 5: How is event handling done in React?

React handles events almost like HTML/JS but has some key differences:  

1. Use **CamelCase** instead of lowercase  
   - HTML: `onclick="..."`  
   - React: `onClick={...}`  

2. Pass a **function** instead of a string  
   - HTML: `<button onclick="doSomething()">Click</button>`  
   - React: `<button onClick={doSomething}>Click</button>`  

---
