# README

This is a React component that opens a modal when clicked. There are two options for implementing this functionality.

# Installation
```
npm i @eiken/modal-react
```

# How to use

## Option 1: Use the Hook to Retrieve Everything at Once

The first option is to use the `useModal` hook to manage the state and functionality of the modal. This hook can be imported from a separate file and used to create a modal with a custom button.

To use this option, follow these steps:

1. Import the `useModal` hook in your component file:
    ```js
    import useModal from './useModal';
    ```
2. Call the useModal hook and retrieve the show, openModal, closeModal, and Modal variables:
    ```js
    const { show, openModal, closeModal, Modal } = useModal();
    ```
3. Use the openModal function to show the modal when the button is clicked:
    ```js
    <button onClick={openModal}>Open Modal</button>
    ```
4. Use the closeModal function to hide the modal when the "close" button is clicked:
    ```js
    <Modal show={show} onClose={closeModal}>
    ```
5. Customize the content of the modal by adding JSX code inside the Modal component tags.

## Option 2: Use the Modal and Build Your Own Code

The second option is to import the Modal component and use it separately from the button component. This option allows you to create your own custom button and use the Modal component to display the modal.

To use this option, follow these steps:

1. Import the Modal component in your component file:
    ```js
    import Modal from './Modal';
    ```
2. Use the useState hook to create a state variable that determines whether the modal should be shown or hidden:
    ```js
   const [showModal, setShowModal] = useState(false);
    ```
3. Create an event handler function that sets the state of the showModal variable to true when the button is clicked:
    ```js
    const handleButtonClick = () => {
        setShowModal(true);
    };
    ```
4. Create an event handler function that sets the state of the showModal variable to **false** when the "close" button is clicked:
    ```js
    const handleCloseModal = () => {
        setShowModal(false);
    };
    ```
5. Use the showModal variable to determine whether the modal should be displayed:
    ```js
    <Modal show={showModal} onClose={handleCloseModal}>
    ```

# Customize your modal
The modal takes 3 props, which are
    ```
    show={show}
    ```
    ```
    onClose={closeModal}
    ```
    ```
    title="Title"
    ```

It also contains a children that allows you to directly write inside of it.
