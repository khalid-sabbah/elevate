# React + Vite
Product Gallery App
This is a simple product gallery app built with Vite, React, and Tailwind CSS. The app fetches product data from a fake API and displays each product in a visually appealing card format. Each card shows the product's image, title, price, and rating, with hover effects for a dynamic user experience.

Features
Data Fetching: Retrieves product data from a mock API using axios.
Responsive Layout: The home page uses a responsive grid layout for cards, adjusting based on screen size.
Loading & Error Handling: Includes a loading spinner while data loads and an error message if the fetch fails.
Hover Effects: Each product card has a scale and zoom effect on hover for interactivity.
Approach
Data Fetching: I used axios to fetch product data from a mock API. This choice was made for simplicity in handling requests and error management.
Loading & Error Management: I implemented a loading state to display a loading indicator and an error state to show an error message if the data fetch fails.
Component-Based Design: The UI is divided into reusable components: HomePage for the main layout and Card for displaying individual products. This structure keeps the code organized and maintainable.
Styling with Tailwind CSS: I used Tailwind CSS for efficient, utility-first styling, which allows quick styling adjustments without writing custom CSS files. Tailwind also supports responsive design out of the box, simplifying the layout for multiple screen sizes.
Challenges Faced
Data Fetching Errors: Initially, there were challenges in handling API errors effectively. Ensuring error messages display only when necessary and don’t persist after successful retries required careful handling.
Responsive Design Tweaks: Achieving a balanced card layout across different screen sizes required some experimentation with Tailwind's grid utilities.
Styling Consistency: Tailwind CSS’s flexibility is powerful, but it required careful use to keep styling consistent and avoid overly complex utility chains.
Running the Application Locally
Prerequisites
Node.js (version 14 or higher recommended)
npm or yarn


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
