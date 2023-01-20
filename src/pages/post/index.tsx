import PageLayout from "@/lib/components/PageLayout";
import { Text } from "@chakra-ui/react";
import { allPosts } from "contentlayer/generated";

const Post = () => {
  console.log(allPosts);

  return (
    <PageLayout>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde at veniam distinctio itaque laborum,
        neque maiores inventore harum? Repellat delectus recusandae, animi reprehenderit quis deleniti veniam voluptates
        maxime, minima soluta excepturi placeat autem debitis sapiente ullam aperiam earum eius esse molestias quaerat
        voluptatum atque ut! Culpa enim deserunt laborum commodi voluptatem, eligendi perspiciatis dolorem voluptas
        aliquid id in, accusamus iusto obcaecati? Dolores, aspernatur sed non esse ipsum blanditiis quasi saepe magni
        aut unde earum provident nulla. Repellat quod nesciunt cumque, dolorem fugiat laboriosam doloremque fugit
        beatae? Maxime laborum aliquid eos nam animi sed quia ducimus, minima at nulla quis.
      </Text>
    </PageLayout>
  );
};

export default Post;
