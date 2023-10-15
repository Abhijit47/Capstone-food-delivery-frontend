import React from "react";
import { useLocation } from "react-router-dom";

const DynamicPage = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <section className="h-screen">
      <h1 className="text-center text-3xl font-bold capitalize">
        {pathname.slice(1).replace("%20", " ").replace("%20", " ")}
      </h1>
    </section>
  );
};

export default DynamicPage;
