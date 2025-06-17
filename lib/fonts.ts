import localFont from "next/font/local";

export const workSans = localFont({
  src: [
    { path: "../app/fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
    {
      path: "../app/fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    { path: "../app/fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "../app/fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "../app/fonts/WorkSans-Light.ttf", weight: "300", style: "normal" },
    {
      path: "../app/fonts/WorkSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    { path: "../app/fonts/WorkSans-Thin.ttf", weight: "100", style: "normal" },
  ],
  variable: "--font-work-sans",
});
