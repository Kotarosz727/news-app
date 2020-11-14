import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

export default function nikkeiBusiness({ nikkeiBusinessArticles }) {
  return <Article head="日経ビジネス" data={nikkeiBusinessArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.NIKKEI_BUSINESS_URL;
  const json = await fetchNewsData(url);
  const nikkeiBusinessArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    nikkeiBusinessArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      nikkeiBusinessArticles,
    },
    revalidate: 10800,
  };
};
