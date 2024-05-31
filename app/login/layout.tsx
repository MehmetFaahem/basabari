import React from "react";

export const metadata = {
  title: "Login",
  description: "Login",
};

function layout({ children }: any) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}

export default layout;
