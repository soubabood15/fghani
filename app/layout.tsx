import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={
 title:"Al Afghani Gaming | Consoles, Games & Accessories",
 description:"Jordan's destination for PlayStation and Xbox consoles, games, and accessories—new and pre-owned, with warranty and nationwide delivery.",
 openGraph:{title:"Al Afghani Gaming",description:"Great gaming starts here—consoles, games and accessories with warranty and delivery across Jordan.",images:["/og.png"],locale:"en_JO",type:"website"},
 twitter:{card:"summary_large_image",title:"Al Afghani Gaming",description:"Great gaming starts here.",images:["/og.png"]}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" dir="ltr"><body>{children}</body></html>}
