'use client';

import { Button } from "@/components/ui/button";
import { UseShare } from "@/hooks";
import { useEffect } from "react";

type SharePostButtonsProps = {
  url: string;
  title: string;
  text: string;
  slug: string;
};

export function SharePostButtons({ url, title, text }: SharePostButtonsProps) {
  
  const { shareButtons } = UseShare({
    url: url,
    title: title,
    text: text,
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
