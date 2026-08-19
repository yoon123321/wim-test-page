import type { Metadata } from "next";
import Header from "@/components/common/Header";
import FloatingConsult from "@/components/common/FloatingConsult";
import ScrollToTop from "@/components/common/ScrollToTop";
import { COMMON_CONTENT } from "@/content/common";
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
        <Header logo={COMMON_CONTENT.logo} />
        <div className="pb-14 tb:pb-0">{children}</div>
        <FloatingConsult />
        <ScrollToTop />
      </body>
    </html>
  );
}
