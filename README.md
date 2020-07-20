This project was created with the purpose to respond this question:

> _I have to create several modal dialogs on my site. They will have a shared behavior and general look but they will have different contents inside depending on their function. How you would structure your React components to handle this variation?_

# Modals View
This is how it looks the project.

![alt text](assets/Modals.gif)

# How to run the project?

In the project directory, you can run:

### `npm start`

Runs the solution in development mode. Then, go to http://localhost:3000/

# Solution

I created a Modal wrapper component that works as HOC (High order component). Moreover, I added a custom hook to handle my modal wrapper. Then, if you want to use the _custom modal hook_ you need to follow these steps:

1. Create your the body of the modal as JSX element. It is going to be needed with our hook `useModal`. You can find this in `src/hooks/useModal.tsx`.

2. Define the `useModal` hook in your parent component.

```
const modalContent = <div>Hi, I am the content!</div>;

const { modal, showModal, hideModal } = useModal(modalContent);
```

_Note:_ The hook returns the modal we want to show, the showModal (Open modal) function and hideModal (close modal) function.

3. Because we use React Portal and react-spring, don't forget to add the `modal` returned by our hook at the end of the code in the parent component.

# Comments
I created some PRs to show how I worked in real life in this small example. Adding some PRs with description and creating some branches.


> _"Hope you can learn with this project about how to work with hooks, HOC, react-spring, emotion js and flex-box."_ - GRTO

