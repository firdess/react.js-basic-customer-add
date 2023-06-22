import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CustomerItem({ customer, deleteHandle }) {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img className="customer-avatar" src="https://i.pravatar.cc/300" />
        <span className="customer-name">{customer.name}</span>
      </div>
      <button className="delete-button" onClick={() => deleteHandle(customer)}>
        <RiDeleteBin6Line />
      </button>
    </li>
  );
}
