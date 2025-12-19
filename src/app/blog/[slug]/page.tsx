import { PostPage as Post } from "@/templates/blog-page/post-page";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


// Incremental Static Regeneration (ISR) -> revalidate application build every 60 seconds
export const revalidate = 60

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug
  }));
}


export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}
