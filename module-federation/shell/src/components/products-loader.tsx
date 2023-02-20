import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const Products = React.lazy(() => import("@mfe/shop1/app"));

export const ProductsLoader = () => {
  return (
    <React.Suspense fallback="loading">
      <ErrorBoundary fallback={<h2>Failed to load Products</h2>}>
        <Products />
      </ErrorBoundary>
    </React.Suspense>
  );
};
