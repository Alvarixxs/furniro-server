# Furniro Server

This repository contains the backend code for the **Furniro** e-commerce furniture application. The server is built using **Node.js**, and it follows best practices for modern backend development. It is connected to a **Supabase** instance, utilizing a relational **SQL database** and the **Sequelize** ORM for managing data.

## Project Overview

The Furniro Server is responsible for handling all backend operations for the Furniro e-commerce platform. This includes user authentication, managing user carts, tracking product likes, and more. It is designed to provide a robust and scalable backend for the application, ensuring smooth operation and efficient data management.

## Key Features

- **User Authentication:** The server handles user registration, login, and authentication, integrating securely with Supabase for managing user data.

- **Cart Management:** Users can add and remove items from their shopping carts. The server manages all cart-related data, ensuring that user selections are saved and updated in real-time.

- **Likes System:** The server tracks product likes, allowing users to like their favorite items. This data is stored in the SQL database, with Sequelize managing the relationships between users and products.

- **Order Processing:** Handles order placement, processing, and status tracking. The server ensures that orders are correctly logged and that inventory data is updated accordingly.

- **Database Migrations:** The project uses Sequelize migrations to manage changes to the database schema. This allows for smooth updates and version control of the database structure.

- **RESTful API:** The server exposes a RESTful API for the frontend application to interact with. This API is designed following industry best practices, ensuring clear and consistent endpoints for all operations.

- **Environment Configuration:** Sensitive data, such as API keys and database credentials, are managed through environment variables, keeping the server secure and the codebase clean.

## Getting Started

To set up and run the server locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/furniro-server.git

# Navigate to the server directory
cd furniro-server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Update the .env file with your Supabase credentials and other necessary configurations

# Run database migrations
npx sequelize-cli db:migrate

# Start the development server
npm start
