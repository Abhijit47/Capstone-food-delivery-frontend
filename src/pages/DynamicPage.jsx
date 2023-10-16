import React from "react";
import { useLocation } from "react-router-dom";

const DynamicPage = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <section className="flex h-screen items-center justify-center">
      <h1 className="text-center font-sans text-4xl font-bold capitalize">
        {pathname.slice(1).replaceAll("%20", " ")}&nbsp;Page
      </h1>
    </section>
  );
};

export default DynamicPage;
