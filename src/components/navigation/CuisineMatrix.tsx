"use client";

import { useState } from "react";
import { TagButton } from "../inputs/TagButton";

export type CuisineMatrixProps = {
  tags: string[];
  onSelectionChange?: (selected: string[]) => void;
  multiple?: boolean;
};

export function CuisineMatrix({ tags, multiple = true, onSelectionChange }: CuisineMatrixProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    let next: string[];
    if (multiple) {
      next = selected.includes(tag) ? selected.filter((item) => item !== tag) : [...selected, tag];
    } else {
      next = selected.includes(tag) ? [] : [tag];
    }
    setSelected(next);
    onSelectionChange?.(next);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <TagButton key={tag} selected={selected.includes(tag)} onClick={() => toggleTag(tag)}>
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
