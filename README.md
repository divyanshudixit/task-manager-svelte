# Directus and Svelte Task Management System

## Description

This project demonstrates how to set up and configure a Directus backend with MySQL, create basic functionalities for user authentication and task management, and integrate a frontend using Svelte and Flowbite. 

## Requirements

1. **Directus Setup with MySQL**
   - Install and configure Directus with a MySQL database.
   - Set up Directus to manage tasks with fields for title, description, status, and due date.

2. **User Login**
   - Implement a user authentication system using Directus.
   - Ensure users can log in and log out securely.

3. **Task Management**
   - Create functionalities for adding and deleting tasks.
   - Ensure task data is correctly saved and removed in the MySQL database via Directus.

4. **Frontend Integration with Svelte and Flowbite**
   - Set up a basic Svelte project.
   - Use Flowbite components to create a user-friendly interface.
   - Display a task list fetched from the Directus backend.
   - Include forms for adding and deleting tasks.
   - Ensure the user interface is responsive and accessible.

## Installation

### Directus Setup

1. **Install Directus**

   Follow the [Directus installation guide](https://docs.directus.io/getting-started/installation/) to install Directus.

2. **Configure MySQL**

   Ensure you have a MySQL database set up. Configure Directus to use your MySQL database by updating the `.env` file with your database credentials:

   ```env
   DB_CLIENT=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   ```
## Set Up Directus

1. **Access the Directus Admin Panel**

   Open your web browser and navigate to your Directus admin panel. This is typically accessible at `http://localhost:8055` or the URL where you have Directus hosted.

2. **Create a New Collection for Tasks**

   - **Navigate to Collections & Fields**: In the admin panel, go to the sidebar and select `Collections & Fields`.

   - **Add a New Collection**: Click the `+ Add Collection` button.

   - **Configure Collection Settings**:
     - **Name**: Enter `Tasks` for the collection name.
     - **Description**: Optionally, provide a description for the collection.

   - **Add Fields to the Collection**:
     1. **Title**:
        - **Field Type**: `Text`
        - **Field Name**: `title`
        - **Display Name**: `Title`
        - **Required**: Yes

     2. **Description**:
        - **Field Type**: `Text Area`
        - **Field Name**: `description`
        - **Display Name**: `Description`
        - **Required**: No

     3. **Status**:
        - **Field Type**: `Enumeration`
        - **Field Name**: `status`
        - **Display Name**: `Status`
        - **Options**: 
          - `pending`
          - `completed`
        - **Default Value**: `pending`
        - **Required**: Yes

     4. **Due Date**:
        - **Field Type**: `Date`
        - **Field Name**: `due_date`
        - **Display Name**: `Due Date`
        - **Required**: No

   - **Save the Collection**: Once all fields are added, click the `Save Collection` button.

3. **Configure Authentication Settings**

   - **Navigate to Authentication Settings**: In the admin panel, go to `Settings` and then `Authentication`.

   - **Set Up Authentication**:
     - Ensure that users can log in and log out securely. Configure settings according to your project’s requirements.

   - **Create User Roles**: Optionally, set up roles and permissions for different types of users to manage access to the tasks.

4. **Test the Setup**

   - **Add Sample Tasks**: Go to the `Tasks` collection and add a few sample tasks to ensure everything is working correctly.

   - **Verify User Authentication**: Test the login and logout functionalities to ensure users can authenticate properly.

## Frontend Setup

### Download and Open the Repository

To get started, download the repository and open it in your preferred code editor:

1. Download the project as a ZIP file.
2. Extract the ZIP file.
3. Open the extracted project directory in your preferred code editor.

### Install Dependencies

Navigate to the Svelte project directory and install the required dependencies:

```bash
npm install
```
Create a .env file in your Svelte project root and add your Directus API URL:
```bash
VITE_DIRECTUS_API_URL=http://localhost:8055
```

### Run the Project
Start the development server:
```bash
npm run dev
```
The project should now be running at http://localhost:3000.

## Usage

### Login

Users can log in using the login form provided in the Svelte frontend. The authentication is handled by Directus.

### Task Management

Users can add, view, and delete tasks. Tasks are managed through Directus and displayed in the Svelte frontend.
