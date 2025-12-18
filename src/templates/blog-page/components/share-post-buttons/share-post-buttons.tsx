import { Button } from "@/components/ui/button";
import { UseShare } from "@/hooks";
import { Post } from "contentlayer/generated";
import { useEffect } from "react";

type SharePostButtonsProps = {
  post: Post;
  slug: string;
};

export function SharePostButtons({ post, slug }: SharePostButtonsProps) {
  
  const siteSetUrl = `https://site.set/blog/${slug}`;
  
  const { shareButtons } = UseShare({
    url: siteSetUrl,
    title: post.title,
    text: post.description,
  });
  
  useEffect(() => {}, [])

  return (
    <div className="flex justify-end md:flex-col gap-3">
      {shareButtons.map((provider) => (
        <Button
          key={provider.provider}
          variant="outline"
          type="button"
          className="w-fit md:w-full justify-start gap-2"
          onClick={() => provider.action()}
        >
          {provider.icon}
          <span className="hidden md:block">{provider.name}</span>
        </Button>
      ))}
    </div>
  );
}
