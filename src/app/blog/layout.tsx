import type { Metadata } from "next";
import { Inter, Inter_Tight, Montserrat_Alternates, Poppins} from 'next/font/google'



const inter = Inter({
  subsets: ['latin'],
  weight: "100"
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: "200"
})

export const metadata: Metadata = {
  title: " Blog | Adrian",
  description: "blog adrian Perez",
  keywords: " blog"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
