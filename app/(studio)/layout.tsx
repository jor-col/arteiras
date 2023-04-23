import styles from './admin.module.css'


// export const metadata = {
//   title: "Arteiras Gallery and Boutique",
//   description: "Gallery and Event Space Site",
// };

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html className={styles.admin} lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
