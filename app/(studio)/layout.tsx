// export const metadata = {
//   title: "Arteiras Gallery and Boutique",
//   description: "Gallery and Event Space Site",
// };

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
