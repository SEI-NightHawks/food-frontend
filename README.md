# React Frontend for Meal Meet

Meal Meet is a blog for users to view food eaten at various locations, express their opinions and post pictures of their delicious (hopefully) meals.  This README provides an overview of the React frontend code structure, endpoints, and paths. It includes instructions to start the React app and other pertinent information.

### Team Members
<img src="ReadmeImages/T0351JZQ0-U05JL6LL5A8-0e474603f175-512.png"  width="30" height="30">  Chris Hercules (github: https://github.com/christopher19)

<img src="ReadmeImages/T0351JZQ0-U05QYAYE86B-1d4a9d9e85cd-72.png"  width="30" height="30">  Elisa Potillo (github: https://github.com/elisacris98)

<img src="ReadmeImages/T0351JZQ0-U05QZ7VBNQG-c4f2d7c7fbf4-512.png"  width="30" height="30">  Jeanpierre Capunay (github: https://github.com/jpcapunay)

<img src="ReadmeImages/110782743-2.png"  width="30" height="30">  Manasavi Saluja (github: https://github.com/mosmoo)

<img src="ReadmeImages/IMG_7681 copy.jpg"  width="30" height="30">  Ryan Gelman (github: https://github.com/ryangelman)

<img src="ReadmeImages/T0351JZQ0-U05QZ7WDK6C-868bfc71e1bc-72.png"  width="30" height="30">  Sara Mejia (github: https://github.com/saramejia)

<img src="ReadmeImages/T0351JZQ0-U05QN5UN857-7c2e3de4d611-72.jpeg"  width="30" height="30">  Stuart Shapiro (github: https://github.com/sbshap828

<img src="ReadmeImages/T0351JZQ0-U05S5H67CP3-80c403ec2a12-72-2.png"  width="30" height="30">  Titus Hull Faulkner (github: https://github.com/Empairim)

https://files.slack.com/files-pri/T0351JZQ0-F06992B28P7/img_7681.jpg


## Component Hierarchy
<img src="ReadmeImages/Screenshot 2023-12-11 at 1.45.22 PM copy.png">


## Front End 

<img src="ReadmeImages/Screenshot 2023-12-13 at 1.39.56 PM.png">
<img src="ReadmeImages/Screenshot 2023-12-13 at 1.54.09 PM.png">

## Project Structure

The frontend code consists of various JavaScript files handling API requests and defining components for different functionalities.

### File Structure

- `Comment.js`: Handles API requests related to comments.
- `Likes.js`: Manages API calls for likes on posts.
- `apiConfig.js`: Configures the base URL and sets up Axios for making API requests.
- `Posts.js`: Contains functions to interact with post-related endpoints.
- `User_profiles.js`: Handles user profile-related API requests.
- `Users.js`: Manages user authentication (sign-up, sign-in, sign-out) and password changes.
- `App.js`: Main component managing routing and rendering of different screens.

## Endpoints and Paths

### Comment Routes

- `GET /posts/{post_id}/comments/`: Get comments for a specific post.
- `GET /comments/{id}`: Get a specific comment.
- `POST /comments/`: Create a new comment.
- `DELETE /comments/{id}`: Delete a specific comment.

### Likes Routes

- `GET /likes/`: Get all likes 
- `GET /likes/{id}`: Get a specific like.
- `POST /likes/`: Create a new like.
- `PUT /likes/{id}`: Update a specific like.
- `DELETE /likes/{id}`: Delete a specific like.

### Posts and User Profiles Routes

- `GET /posts/`: Retrieve all posts.
- `GET /user/posts/{id}/`: Get posts for a specific user.
- `POST /posts/`: Create a new post.
- `GET /user/profile/`: Get the user's profile.
- `POST /userProfiles/`: Create a new user profile.
- Other CRUD operations for posts and user profiles.

### Users Routes

- `POST /users/register/`: Register a new user.
- `POST /users/login/`: Login a user.
- `POST /`: Change password 
- `GET /users/verify/`: Verify user authentication status.

## Usage

### Startup Instructions

1. Ensure Node.js is installed.
2. Install dependencies using `npm install`.
3. Start the React application using `npm start`.

