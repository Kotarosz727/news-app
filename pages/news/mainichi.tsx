import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

function MAINICHI({ mainichiArticles }) {
  return <Article head="毎日新聞" data={mainichiArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.MAINICHI_URL;
  const json = await fetchNewsData(url);
  const mainichiArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    mainichiArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      mainichiArticles,
    },
    revalidate: 10800,
  };
};

export default MAINICHI;
