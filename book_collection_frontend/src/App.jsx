import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/books";

export default function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API);
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Failed to fetch books");
    }
  };

  const handleAdd = async () => {
    if (!form.title.trim()) {
      return setError("Title is required");
    }

    setLoading(true);

    try {
      const res = await axios.post(API, form);
      setBooks((b) => [...b, res.data]);
      setForm({ title: "", author: "" });
      setError("");
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Failed to add book");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📚 Book Manager</h1>

      {/* Error message */}
      {error && (
        <div className="mb-4 text-red-600 bg-red-100 px-4 py-2 rounded w-full max-w-md text-center">
          {error}
        </div>
      )}

      {/* Add Book Form */}
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add a Book</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-2 mb-3 border rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full px-4 py-2 mb-4 border rounded"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <button
          onClick={handleAdd}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </div>

      {/* Book List */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3">📖 Book List</h2>
        {books.length === 0 ? (
          <p className="text-gray-500">No books available.</p>
        ) : (
          <ul className="space-y-3">
            {books.map((book, idx) => (
              <li key={idx} className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium">{book.title}</p>
                <p className="text-sm text-gray-600">by {book.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
