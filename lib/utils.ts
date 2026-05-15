import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenAddress(address: string, chars = 4) {
  if (!address.startsWith("0x") || address.length < 2 + chars * 2) return address;
  return `${address.slice(0, 2 + chars)}...${address.slice(-chars)}`;
}
