import Link from "next/link";
import "../globals.css";
import styles from "./layout.module.css";
import Image from "next/image";
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
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
              <a href="/featured-artist">Featured Artist</a>
            </li>
            <hr></hr>
            <li>
              <a href="/schedule">Schedule</a>
            </li>
            <hr></hr>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.pageContent}>{children}</div>
      </body>
    </html>
  );
}
