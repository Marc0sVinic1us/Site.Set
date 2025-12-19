'use client';
import { SearchInput } from "@/components/search-input";
import { useSearchParams } from "next/navigation";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { Post } from "contentlayer/generated";
import { InboxIcon } from "lucide-react";


export type BlogPageProps = {
  posts: Post[]
}

export function BlogPage({ posts }: BlogPageProps) {
  const seachParams = useSearchParams();
  const query = seachParams?.get('q') ?? "";

  const pageTitle = query
    ? `Resultados para busca "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const sortedPosts = query
    ? posts.filter((post) =>
        post.title.toLowerCase()?.includes(query.toLowerCase())
      )
    : posts;
  const hasPosts = sortedPosts.length > 0;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 px-4 md:px-0">
            <span className="text-cyan-100 bg-cyan-300 text-body-tag w-fit px-4 py-2 rounded-md text-center md:text-left uppercase">
              Blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>

          <SearchInput />
        </div>
      </header>

      {/* Listagem de posts */}
      {hasPosts ? (
        <PostGridCard>
          {sortedPosts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString("pt-BR")}
              slug={post.slug}
              image={post.image}
              author={{
                avatar: post.author.avatar,
                name: post.author.name,
              }}
            />
          ))}
        </PostGridCard>
      ) : (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
            <InboxIcon className="h-12 w-12 text-cyan-100" />
            <p className="text-gray-100 text-center">Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
}
