import { GetStaticProps } from "next";
import Article from "./components/article";
import { fetchNewsData, translate } from "../lib/api";

export default function Home({ nytimesArticles }) {
  return <Article data={nytimesArticles} head="home"></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.NYTIMES_URL;
  const json = await fetchNewsData(url);
  const nytimesArticles: { title: string; url: string }[] = [];

  //pick up title and abstract from json object
  json.results.map((e) => {
    nytimesArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      nytimesArticles,
    },
    revalidate: 1,
  };
};
