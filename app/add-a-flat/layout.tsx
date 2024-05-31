import React from "react";

export const metadata = {
  title: "Add A Flat",
  description: "Add A Flat",
};

function layout({ children }: any) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}

export default layout;
