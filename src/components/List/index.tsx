import React from "react";

interface IList {
  message: string;
}

export const List: React.FC<IList> = ({ message }) => {
  return <div>{message}</div>;
};
