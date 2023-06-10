import React, { useState, useRef } from "react";

const NewExpense = () => {
  const inputRef = useRef();

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
};

export default NewExpense;
