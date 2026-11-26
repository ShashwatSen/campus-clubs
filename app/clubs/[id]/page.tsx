import Link from "next/link";
import { clubs } from "@/lib/clubs";
import { getClubById, clubSummary } from "@/lib/logic";

export default function ClubPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const club = getClubById(clubs, id);
  if (!club) {
    return (
      <div>
        <p>Club not found.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>{club.name}</h2>
      <p>{clubSummary(club)}</p>
      <Link href="/">Back to all clubs</Link>
    </div>
  );
}