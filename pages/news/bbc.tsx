import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

function BBC({ bbcArticles }) {
  return <Article head="BBC NEWS" data={bbcArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.BBC_URL;
  const json = await fetchNewsData(url);
  const bbcArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    bbcArticles.push({
      title: e.title,
      url: e.url,
    });
  });
  console.log("bbcArticles", bbcArticles);

  return {
    props: {
      bbcArticles,
    },
    revalidate: 10800,
  };
};

export default BBC;
