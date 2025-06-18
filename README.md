# use-s-check

A simple React demo project to showcase the usage of the [`use-s-react`](https://www.npmjs.com/package/use-s-react) hook for global state management, including sharing and updating state (string, number, and object) across multiple pages using React Router.

## Features

- **Global State with `useS`**: Easily share and update state (number, string, object) across components and routes.
- **React Router**: Navigate between pages while maintaining shared state.
- **Live Editing**: Update state on one page and see changes reflected on another.
- **Reset Functionality**: Reset all shared state to initial values.

## Project Structure

```
src/
├── App.jsx         # Main app with routing and state
├── CountPage.jsx   # Secondary page to display and edit shared state
├── main.jsx        # Entry point
├── index.css       # Styles
└── App.css         # Styles
```

## How It Works

- The app uses `useS` from `use-s-react` to create three shared states:
  - `count` (number)
  - `name` (string)
  - `user` (object: `{ firstName, lastName }`)
- State is updated via inputs and buttons on the main page (`/`).
- Navigate to `/count` to see and edit the same state.
- All changes are instantly reflected across both pages.
- Use the **Reset** button to clear all state.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Example Usage

- Enter a name and user details on the home page.
- Click "Go to Count Page" to see the same data.
- Edit the data on either page; changes sync everywhere.
- Click "Reset" to clear all fields.

## Dependencies

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [use-s-react](https://www.npmjs.com/package/use-s-react)
- [Vite](https://vitejs.dev/) (for development)

## License

MIT

---

**Demo project for experimenting with global state using `use-s