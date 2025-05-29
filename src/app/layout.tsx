import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const nunito = Nunito({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "My Wiki",
  description: "Справочник по фронтенд-разработке",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <CssBaseline />
        <Header/>
        <Box sx={{ display: 'flex' }}>
          <Sidebar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 8 }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
