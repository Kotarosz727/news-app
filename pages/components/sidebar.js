import Layout from "./layout";
import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <ul className={styles.ul}>
          <li className={styles.sidebar_item}>
            <Link href="/news/newyorktimes">
              <a>NewYorkTimes</a>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/news/guardian">
              <a>The Guardian</a>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/news/nikkei">
              <a>日本経済新聞</a>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/news/nikkeibusiness">
              <a>日経ビジネス</a>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/news/japantimes">
              <a>the japan times</a>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/news/asahi">
              <a>朝日新聞</a>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/news/sankei">
              <a>産経新聞</a>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/news/bbc">
              <a>BBC NEWS</a>
            </Link>
          </li>
          <li className={styles.sidebar_item}>
            <Link href="/news/wsj">
              <a>THE WALL STREET JOURNAL</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
