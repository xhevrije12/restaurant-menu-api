# Restaurant Menu API
A simple and secure backend system for managing restaurant menus using Node.js, Express, and MongoDB.

## Main Functionalities

* **User Authentication:** Secure registration and login using **JWT** (JSON Web Tokens).
* **Password Security:** All passwords are encrypted with **bcryptjs** before being saved to the database.
* **Full CRUD:** Create, Read, Update, and Delete menu items (Title, Price, Category, Description).
* **Data Protection:** Users can only access, edit, or delete the menu items **they created**.
* **Centralized Error Handling:** Consistent error messages and status codes for all API requests.

## Database Structure
The project uses a One-to-Many Relationship:
1 User (Restaurant) can have Many Menu Items.
Each menu item is linked to a specific User via user_id.
This ensures data isolation (User A cannot touch User B's menu).

## Tech Stack

* **Backend:** Node.js & Express.js
* **Database:** MongoDB & Mongoose
* **Security:** JWT, Bcryptjs, Dotenv

