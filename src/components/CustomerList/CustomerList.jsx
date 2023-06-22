import React from "react";
import CustomerItem from "../CustomerItem/CustomerItem";

export default function CustomerList({ customers, setCustomers }) {
  const deleteHandle = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };

  return (
    <ul className="customer-list">
      {customers.map((customer) => {
        return (
          <CustomerItem
            customer={customer}
            key={customer.id}
            deleteHandle={deleteHandle}
          />
        );
      })}
    </ul>
  );
}
