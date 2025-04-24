import React from "react";

const MyButton: React.FC = () => {
  const handleClick = () => {
    alert("Du klickade på knappen!");
  };

  return (
    <button onClick={handleClick} >
      Klicka här
    </button>
  );
};

export default MyButton;