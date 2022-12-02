import React from "react";

interface IInput {
  setMessage: (e: string) => void;
  saveMessage: () => void;
}

export const Input: React.FC<IInput> = ({ setMessage, saveMessage }) => {
  return (
    <div>
      <input onChange={(e) => setMessage(e.currentTarget.value)} />
      <button onClick={saveMessage}>Save</button>
    </div>
  );
};
