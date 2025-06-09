# Book Collection App

A simple full-stack React app for managing a collection of books. Users can view the list of books and add new books via a form. The backend API handles storing and retrieving book data.

---

## Features

* Fetch and display all books from the backend
* Add new books with title and author
* Error handling and loading states
* Built with React and Axios on the frontend
* Backend API (assumed RESTful) for managing books

---

## Tech Stack

* Frontend: React, Axios, Tailwind CSS (optional)
* Backend: REST API (Node.js/Express)
* Optional: JSON Server for quick backend mocking

---

## Getting Started

### Prerequisites

* Node.js installed
* Backend API running locally at `http://localhost:3000/books`

### Running the Frontend

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/book-collection.git
   ```

2. Navigate to the frontend folder (if separate):

   ```bash
   cd book-collection
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the React development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API

The app expects a backend API available at `http://localhost:3000/books` with the following endpoints:

* **GET /books** — Fetch all books
* **POST /books** — Add a new book (JSON body with `title` and `author`)

---

## Usage

* View the list of books on the homepage.
* Use the form to add a new book by entering title and author.
* Loading and error messages appear as appropriate.

---

## Future Improvements

* Edit and delete books
* User authentication
* Pagination and search
* Backend database integration

---

## License

This project is open-source and available under the MIT License.
