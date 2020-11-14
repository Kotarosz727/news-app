import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

function jaTimes({ jaTimesArticles }) {
  return <Article head="the japan times" data={jaTimesArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.JATIMES_URL;
  const json = await fetchNewsData(url);
  const jaTimesArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    jaTimesArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      jaTimesArticles,
    },
    revalidate: 10800,
  };
};

export default jaTimes;
