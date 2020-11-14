import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData, translate } from "../../lib/api";

function NyTimes({ nytimesArticles }) {
  return <Article head="NewYorkTimes" data={nytimesArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.NYTIMES_URL;
  const json = await fetchNewsData(url);
  const nytimesArticles:{ title: string; url: string }[] = [];

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
    revalidate: 10800,
  };
};

export default NyTimes;
