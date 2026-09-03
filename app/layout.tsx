import type { Metadata } from "next";
import Header from "@/components/common/HeaderMain";
import FloatingConsult from "@/components/common/FloatingConsult";
import ScrollToTop from "@/components/common/ScrollToTop";
import FooterMain from "@/components/common/FooterMain";
import { COMMON_CONTENT } from "@/data/common";
import "./globals.css";

export const metadata: Metadata = {
  title: COMMON_CONTENT.siteTitle,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>
        <Header />
        <div className="pb-14 tb:pb-0">{children}</div>
        <FooterMain />
        <FloatingConsult />
        <ScrollToTop />
      </body>
    </html>
  );
}
