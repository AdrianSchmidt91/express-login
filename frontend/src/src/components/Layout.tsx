import React from "react";

export const Layout: React.FC = ({ children }): React.ReactElement => {
  return (
    <div>
      <main className="p-2">{children}</main>
    </div>
  );
};
