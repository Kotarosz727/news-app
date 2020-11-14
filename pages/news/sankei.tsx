import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

function SANKEI({ sankeiArticles }) {
  return <Article head="産経新聞" data={sankeiArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.SANKEI_URL;
  const json = await fetchNewsData(url);
  const sankeiArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    sankeiArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      sankeiArticles,
    },
    revalidate: 10800,
  };
};

export default SANKEI;
