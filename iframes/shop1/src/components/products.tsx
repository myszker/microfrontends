import React, { useEffect } from "react";
import { ProductInterface, productsData } from "./products.data";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface Settings {
  displayStock?: boolean;
  minCostValue?: number;
  sortBy?: "none" | "label" | "price" | "stock";
}

interface ProductsProps {
  settings: Settings;
}

const Products = ({ settings }: ProductsProps) => {
  // 🔥 iframe'y nie dopasowują swoich rozmiarów do treści, więc trzeba ręcznie
  // powiadomić shella jaką wysokość powinien nadać ramce osadzającej ten mikrofront.
  useEffect(() => {
    window.parent?.postMessage(
      { type: "updateIframeHeight", height: document.body.offsetHeight + 16 },
      "*"
    );
  });

  const { minCostValue, sortBy, displayStock } = settings || {};

  let dataToDisplay: ProductInterface[];

  if (minCostValue) {
    dataToDisplay = (productsData || []).filter(
      ({ price }) => price >= minCostValue!
    );
  } else {
    dataToDisplay = (productsData || []).slice();
  }

  if (sortBy && sortBy === "price") {
    dataToDisplay.sort((a, b) => b.price - a.price);
  }

  if (sortBy && sortBy === "stock" && displayStock) {
    dataToDisplay.sort((a, b) => b.stock - a.stock);
  }

  if (sortBy && sortBy === "label") {
    dataToDisplay.sort((a, b) => a.label.localeCompare(b.label));
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            {displayStock && <StyledTableCell>Stock</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataToDisplay.map(({ label, id, price, stock }, index) => (
            <TableRow key={`item-${id}`}>
              <TableCell>{index}</TableCell>
              <TableCell>{label}</TableCell>
              <TableCell>{price}</TableCell>
              {displayStock && <TableCell>{stock}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledTableCell = styled(TableCell)`
  font-weight: bold;
`;
export { Products, Settings };
