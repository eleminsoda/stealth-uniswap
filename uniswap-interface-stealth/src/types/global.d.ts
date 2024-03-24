// global.d.ts
export {};

declare global {
  interface Window {
    VANTA: any; // Use a more specific type if you know the structure of VANTA
  }
}