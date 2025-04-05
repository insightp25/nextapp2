import "./globals.css";
import Link from "next/link";
import Control from "./Control.js";

export const metadata = {
  title: "WEB TUTORIALS",
  description: "Generated by LFTY",
};

export default async function RootLayout({ children }) {
  const resp = await fetch("http://localhost:9999/topics", {next: {revalidate: 0}});
  const topics = await resp.json();

  return (
    <html>
      <body>
        <h1><Link href="/">WEB - src/app/layout.js</Link></h1>

        {children}

        <h3>courses - src/app/layout.js</h3>
        <ol>
          {topics.map((topic)=>{
            return <li><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>

          })}
        </ol>
        <h3>actions: - src/app/layout.js</h3>
        <Control />
        <br />
        <br />
        <br />
      </body>
    </html>
  );
}
