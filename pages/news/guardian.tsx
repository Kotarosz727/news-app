import { GetStaticProps } from "next";
import Article from "../components/article";
import { fetchNewsData, translate } from "../../lib/api";

function GUARDIAN({ guardianArticles }) {
  return <Article head="The Guardian" data={guardianArticles}></Article>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.GUARDIAN_URL;
  const json = await fetchNewsData(url);
  const guardianArticles:{ title: string; url: string }[] = [];
  //pick up title and abstract from json object
  json.response.results.map((e) => {
    guardianArticles.push({
      title: e.webTitle,
      url: e.webUrl,
    });
  });

  return {
    props: {
      guardianArticles,
    },
    revalidate: 1,
  };
};

export default GUARDIAN;
