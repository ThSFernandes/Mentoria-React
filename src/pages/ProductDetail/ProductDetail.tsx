import { useParams } from "@tanstack/react-router";
import type React from "react";

export function ProductDetail(): React.ReactElement {
  const { id } = useParams({ from: "/productDetail/$id" });
  return <h1>Product Detail: {id}</h1>;
}
