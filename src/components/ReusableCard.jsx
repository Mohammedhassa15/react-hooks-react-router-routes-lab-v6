// src/components/ReusableCard.jsx
import React from "react";

function ReusableCard({ children }) {
  return (
    <div className="reusable-card">
      {children}
    </div>
  );
}

export default ReusableCard;
