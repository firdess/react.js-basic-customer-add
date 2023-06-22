import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";

export default function CustomerForm({ addNewCustomer }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      alert("hata");
      return;
    }
    const newCustomer = {
      id: Math.random(),
      name: input,
    };

    addNewCustomer(newCustomer);
    setInput("");
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        className="customer-input"
        type="text"
        placeholder="Add a new customer"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="add" type="submit">
        <BsPlusLg />
      </button>
    </form>
  );
}
