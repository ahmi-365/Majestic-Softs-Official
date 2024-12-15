// utils/cn.ts
import { ClassValue } from "clsx"; // Type for class values
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names safely
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
