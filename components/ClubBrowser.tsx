"use client";

import ClubCard from "./ClubCard";
import { Club, Category } from "@/lib/types";
import { useState } from "react";
import { getClubsByCategory } from "@/lib/logic";

interface Props {
  clubs: Club[];
}

const choices: (Category | "all")[] = ["all", "sports", "arts", "tech", "music"];

export default function ClubBrowser({ clubs }: Props) {
  // TODO (Task 4b): add state for the selected category and work out which clubs to show.
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const visibleClubs =
    selectedCategory === "all"
      ? clubs
      : getClubsByCategory(clubs, selectedCategory);

  return (
    <div>
      <div className="filters">
        {choices.map((choice) => (
          <button
            key={choice}
            className={`filter ${selectedCategory === choice ? "active" : ""}`}
            onClick={() => setSelectedCategory(choice)}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      {visibleClubs.length === 0 ? (
        <p>No clubs in this category yet.</p>
      ) : (
        <div className="card-row">
          {visibleClubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      )}
    </div>
  );
}

