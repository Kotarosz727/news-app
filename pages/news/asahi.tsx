import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData } from "../../lib/api";

function ASAHI({ asahiArticles }) {
  return <Article head="朝日新聞" data={asahiArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.ASAHI_URL;
  const json = await fetchNewsData(url);
  const asahiArticles: { title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.map((e) => {
    asahiArticles.push({
      title: e.title,
      url: e.url,
    });
  });

  return {
    props: {
      asahiArticles,
    },
    revalidate: 10800,
  };
};

export default ASAHI;
