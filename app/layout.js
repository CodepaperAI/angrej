import { Jost } from "next/font/google";
import "./globals.css";

const brandFont = Jost({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  subsets: ["latin"]
});

export const metadata = {
  title: "Angrej Singh NCLEX | Live coaching for RN and RPN aspirants",
  description:
    "Live RN and RPN NCLEX coaching with alternate batch support, class recordings, and direct teaching by Angrej Singh.",
  openGraph: {
    title: "Angrej Singh NCLEX | Live coaching for RN and RPN aspirants",
    description:
      "Live RN and RPN NCLEX coaching with alternate batch support, class recordings, and direct teaching by Angrej Singh.",
    images: [
      {
        url: "https://ncx-s3.s3.us-east-2.amazonaws.com/setting/1758192836-wB6TDmevMQ.png"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={brandFont.variable}>{children}</body>
    </html>
  );
}
