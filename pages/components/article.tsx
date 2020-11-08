import React, { useEffect } from "react";
import { translate } from "../../lib/api";
import Layout from "./layout";
import styles from "./article.module.css";

export default function Acticle({ data, head }) {
  useEffect(() => {});
  const fetchTitle = async (id: string, title: string) => {
    const title_jpn = await translate(title);
    const elm = document.getElementById(id);
    elm.innerHTML = title_jpn;
  };
  return (
    <Layout siteTitle={head}>
      <div>
        <h1>{head}</h1>
        <ul className={styles.ul}>
          {data?.map((article, index) => (
            <div>
              <li>
                <div
                  id={index}
                  className={styles.title}
                  onMouseOver={() => fetchTitle(index, article.title)}
                >
                  {article.title}
                </div>
                <br></br>
                <div className={styles.url}>
                  <a href={article.url}>{article.url}</a>
                </div>
              </li>
              <br></br>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
