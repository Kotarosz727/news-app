import Head from "next/head";
import Style from "./layout.module.css";
import Sidebar from "./sidebar";

export default function Layout({ children, siteTitle }) {
  return (
    <div className={Style.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sidebar></Sidebar>
      <main className={Style.main}>{children}</main>
    </div>
  );
}
