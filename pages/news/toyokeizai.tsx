import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

function TOYOKEIZAI({ toyokeizaiiArticles }) {
  return <Article head="東洋経済オンライン" data={toyokeizaiiArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.TOYOKEIZAI_URL;
  const json = await fetchNewsData(url);
  const toyokeizaiiArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    toyokeizaiiArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      toyokeizaiiArticles,
    },
    revalidate: 10800,
  };
};

export default TOYOKEIZAI;
