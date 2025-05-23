"use client";
import { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/lib/sanity";

export default function DecorationAdmin() {
  const [decorations, setDecorations] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", details: "", price: "" });
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await sanityClient.fetch(
      `*[_type == "decoration"]{_id, id, name, details, price}`
    );
    setDecorations(data);
  };

  const addItem = async () => {
    if (!newItem.name || !newItem.price) return;
    await sanityClient.create({
      _type: "decoration",
      id: Date.now(),
      name: newItem.name,
      details: newItem.details,
      price: Number(newItem.price),
    });
    setNewItem({ name: "", details: "", price: "" });
    fetchData();
  };

  const deleteItem = async (id) => {
    await sanityClient.delete(id);
    fetchData();
  };

  const startEdit = (item) => {
    setEditItem(item);
    setNewItem({
      name: item.name,
      details: item.details,
      price: item.price,
    });
  };

  const updateItem = async () => {
    if (!editItem) return;
    await sanityClient
      .patch(editItem._id)
      .set({
        name: newItem.name,
        details: newItem.details,
        price: Number(newItem.price),
      })
      .commit();
    setEditItem(null);
    setNewItem({ name: "", details: "", price: "" });
    fetchData();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        🎨 Decoration Management
      </h1>

      {/* Form Section */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Enter Decoration Name"
          value={newItem.name}
          onChange={(e) =>
            setNewItem({ ...newItem, name: e.target.value })
          }
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Decoration Details"
          value={newItem.details}
          onChange={(e) =>
            setNewItem({ ...newItem, details: e.target.value })
          }
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) =>
            setNewItem({ ...newItem, price: e.target.value })
          }
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Add / Update Button */}
      <div className="flex justify-center">
        {editItem ? (
          <button
            onClick={updateItem}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md"
          >
            ✏️ Update Decoration
          </button>
        ) : (
          <button
            onClick={addItem}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md"
          >
            ➕ Add Decoration
          </button>
        )}
      </div>

      {/* Decorations List */}
      <ul className="mt-6 space-y-4">
        {decorations.map((item) => (
          <li
            key={item._id}
            className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <strong className="text-lg text-gray-900">{item.name}</strong>{" "}
              <span className="text-blue-600 font-semibold text-md">
                - ${item.price}
              </span>
              <p className="mt-1 text-gray-600">{item.details}</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-0">
              <button
                onClick={() => startEdit(item)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition duration-300 shadow-md"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteItem(item._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-300 shadow-md"
              >
                ❌ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
