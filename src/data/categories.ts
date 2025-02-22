import { Category } from "../types";
import {
  LeafyGreen,
  Dessert,
  Sandwich,
  PackageOpenIcon,
  Salad,
} from "lucide-react";

export const CATEGORIES: Category[] = [
  { id: "all", name: "All", icon: LeafyGreen },
  { id: "dessert", name: "Dessert", icon: Dessert },
  { id: "saladwarp", name: "Salad Warp", icon: Sandwich },
  { id: "ricebox", name: "Rice Box", icon: PackageOpenIcon },
  { id: "saladbuah", name: "Salad Buah", icon: Salad },
];
