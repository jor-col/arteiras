import Link from "next/link";
import "../globals.css";
import styles from "./layout.module.css";
import Image from "next/image";


// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <nav className={styles.navbar}>
          <Image src="/Flower-Icon.webp" alt="" width={50} height={50} />
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <hr></hr>
            <li>
              <Link href={`/featured_artist`} >Featured Artist</Link>
            </li>
            <hr></hr>
            <li>
              <Link href="/schedule">Schedule</Link>
            </li>
            <hr></hr>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.pageContent}>{children}</div>
      </body>
    </html >
  );
}
