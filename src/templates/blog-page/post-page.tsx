import Image from "next/image";
import Link from "next/link";
import { Post } from "contentlayer/generated";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import { SharePostButtons } from "./components/share-post-buttons";


export type PostPageProps = {
  post: Post
}

export function PostPage({ post }: PostPageProps) {

  const publishedDate = new Date(post.date).toLocaleDateString("pt-BR");
  const siteSetUrl = `https://site.set/blog/${post.slug}`

  return (
    <main className="py-20 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        
        <div className="flex justify-between items-center">
            <Breadcrumb className="w-fit">
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink asChild className="text-action-sm">
                        <Link href="/blog">Blog</Link>
                    </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                    <span className="block md:hidden lg:hidden text-blue-200 text-action-sm">
                        Post
                    </span>
                    <span className="hidden md:block lg:block text-blue-200 text-action-sm">
                        {post.title}
                    </span>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="block md:hidden lg:hidden">
                <SharePostButtons 
                    url={siteSetUrl}
                    title={post.title}
                    text={post.description}
                    slug={post.slug}
                />
            </div>
        </div>
        

        <div className="grid gird-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </figure>

            <header className="p-4 md:p-6 lg:p-12 pb-0">
              <h1 className="mb-8 md:mb-10 text-balance text-heading-lg md:text-heading-xl">
                {post.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  size="sm"
                  src={post.author.avatar}
                  alt={post.author.name}
                />
                <Avatar.Content>
                  <Avatar.Title>{post.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    <time dateTime={post.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert max-w-none pb-8 px-4 mt-12 md:mt-8 md:px-6 lg:px-12">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="hidden md:block lg:block rounded-lg bg-gray-700 p-4 md:p-6">
              <h2 className="mb-4 text-heading-xs text-gray-100">
                Compartilhar
              </h2>
              <SharePostButtons 
                url={siteSetUrl}
                title={post.title}
                text={post.description}
                slug={post.slug}
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
