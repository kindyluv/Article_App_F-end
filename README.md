# Article Application

This application, built with React and Vite, allows users to create, search, and view articles. It provides functionality for users to post articles, search for articles by various criteria, and view detailed information about each article.

## Features

- **User Authentication**: Provides user authentication functionality.
- **Create Article**: Users can create and post new articles.
- **Search Articles**: Users can search for articles by title, user name, and other criteria.
- **View Articles**: Users can view detailed information about articles, including the article content and user details.
- **Responsive Design**: The application is responsive and works well on various devices.

## API Integration

The application integrates with the following APIs, all of which have been thoroughly tested using Vitest:

- **Article API**: Provides endpoints for fetching, creating, and searching articles.
- **User API**: Provides endpoints for fetching user information and creating new users.

## Styled Components

The application utilizes styled components for styling, allowing for modular and reusable styling components. This approach ensures consistency in styling across the application and simplifies maintenance.

## Separation of Concerns

The application follows a clear separation of concerns, with components organized into logical containers and reusable components extracted into separate files. This architecture promotes code readability, maintainability, and scalability.

## Validation Utilities

The application includes validation utilities in the `utils` folder, which are used to validate form inputs. These utilities ensure that user input is validated according to specified criteria before submitting data, enhancing data integrity and user experience.

## Search Functionality

The `handleSearch` function in the `utils` folder provides search functionality for articles. It allows users to search for articles by various criteria, including title, user name, and article ID. This feature enhances usability by enabling users to quickly find relevant content.

## Unit Testing with Vitest

All APIs are thoroughly tested using Vitest with mock data, ensuring their reliability and functionality. The unit tests cover various scenarios to validate the behavior of each API endpoint, guaranteeing that they perform as expected under different conditions. This rigorous testing approach enhances the robustness and stability of the application.

