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
  const header: string = head;
  const english_article: string[] = [
    "NewYorkTimes",
    "The Guardian",
    "the japan times",
    "BBC NEWS",
    "THE WALL STREET JOURNAL",
  ];
  return (
    <Layout siteTitle={head}>
      <div>
        <h1 className={styles.head}>{head}</h1>
        <div className={styles.contents}>
          <ul className={styles.ul}>
            {data?.map((article, index) => (
              <div>
                <li>
                  {english_article.findIndex((item) => item === header) >= 0 ? (
                    <div
                      id={index}
                      className={styles.title}
                      onMouseOver={() => fetchTitle(index, article.title)}
                    >
                      {article.title}
                    </div>
                  ) : (
                    <div id={index} className={styles.title}>
                      {article.title}
                    </div>
                  )}
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
      </div>
    </Layout>
  );
}
