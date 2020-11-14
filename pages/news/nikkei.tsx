import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

export default function nikkei({ nikkeiArticles }) {
  return <Article head="日本経済新聞" data={nikkeiArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.NIKKEI_URL;
  const json = await fetchNewsData(url);
  const nikkeiArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    nikkeiArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      nikkeiArticles,
    },
    revalidate: 10800,
  };
};
