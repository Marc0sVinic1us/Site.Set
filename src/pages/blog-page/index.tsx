import { BlogPage, type BlogPageProps } from "@/templates/blog-page";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

export default function Blog({ posts }: BlogPageProps) {
  return <BlogPage posts={posts} />;
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return {
    props: {
      posts: sortedPosts
    }
  }
}) satisfies GetStaticProps<BlogPageProps>;
