import React, { useEffect } from 'react';
import './App.css';
import { getComments } from "./services/comments";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentsData = await getComments(); // Call the getComments function
        console.log(commentsData); // Log the comments data to the console
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData(); // Invoke the function to fetch comments when the component mounts
  }, []);

  return (
    <h1>Check the console for comments data</h1>
    // You can render your components here as needed
  );
}

export default App;
