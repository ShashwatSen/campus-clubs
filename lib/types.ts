// TODO (Task 1): replace these loose types with the exact ones from the brief.
export type Category = "sports" | "arts" | "tech" | "music";

export interface Club {
  readonly id: number;
  name: string;
  category: Category;
  members: number;
  description?: string;
}

// TODO (Task 1): write describeMembers as described in the brief.
export function describeMembers(count: number | string): string  {
  if (typeof count === "number") {
    return `${count} members`
  }
  else {return count.toUpperCase()}
}

