import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

function WSJ({ wsjArticles }) {
  return <Article head="THE WALL STREET JOURNAL" data={wsjArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.WSJ_URL;
  const json = await fetchNewsData(url);
  const wsjArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    wsjArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      wsjArticles,
    },
    revalidate: 10800,
  };
};

export default WSJ;
