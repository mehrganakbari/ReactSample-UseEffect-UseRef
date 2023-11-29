sample for "useEffect" and "useRef"
I want the focus() event to happen on the "input" when I enter the program
In JavaScript, we first give an identification symbol such as class or ID to the input, and then execute the program on it as described below.↓ 

const element = document.querySelector(".input")

element.focus();

But this is completely wrong in reactjs
Because these were SideEffects, we are not allowed to do this in RenderLogic
