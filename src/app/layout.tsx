import type { Metadata } from "next";
import { Inter, Inter_Tight, Montserrat_Alternates, Poppins} from 'next/font/google'
import "./globals.css";



const inter = Inter({
  subsets: ['latin'],
  weight: "100"
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300']
})

// export const metadata: Metadata = {
//   title: "Adrian Perez",
//   description: "portfolio adrian Perez",
//   keywords: " react, nextc"
// };

export const metadata: Metadata = {
  title: "Adrian Perez",
  description: "Portfolio Adrian Perez",
  keywords: "react, next, frontend, portfolio, react Native, Expo",
  openGraph: {
    title: "Adrian Portfolio",
    description: "Portfolio profesional de Adrian Perez, especializado en frontend.",
    url: "https://www.adrian-perez.es/",
    images: [
      {
        url: "https://www.adrian-perez.es/",
        width: 800,
        height: 600,
        alt: "Adrian Perez",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Adrian | Portfolio",
  //   description: "Portfolio profesional de Adrian Perez.",
   
  // },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      
      <body className={poppins.className}>{children}</body>
    </html>
  );
}



