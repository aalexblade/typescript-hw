// @types/custom.d.ts

declare module "*.svg" {
  const svgPath: string;
  export default svgPath;
}

declare module "*.png" {
  const pngPath: string;
  export default pngPath;
}
