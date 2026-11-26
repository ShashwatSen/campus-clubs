import { Club, Category, describeMembers } from "./types";

// TODO (Task 2): replace each placeholder body with the real logic from the brief.

export function getClubsByCategory(clubs: Club[], category: Category): Club[] {
  return clubs.filter(club => club.category === category);
}

export function totalMembers(clubs: Club[]): number {
  return clubs.reduce((total, club) => total + club.members, 0);
}

export function clubSummary(club: Club): string {
  return `${club.name} (${club.category}): ${describeMembers(club.members)} members`;
}

export function getClubById(clubs: Club[], id: number): Club | null {
  return clubs.find(club => club.id === id) || null;
}
