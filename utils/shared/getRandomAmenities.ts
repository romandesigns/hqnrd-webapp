import { amenities as enrichedAmenities } from "@/components/page/room/Amenities/amenities";

export function getRandomRoomAmenities(
  roomAmenities: Record<string, boolean>,
  limit = 6,
) {
  // 1. All available (true) amenities with icons + labels
  const available = enrichedAmenities.filter(
    (item) => roomAmenities[item.key] === true,
  );

  const totalAvailable = available.length;

  // 2. Shuffle randomly
  const shuffled = available.sort(() => Math.random() - 0.5);

  // 3. Select up to `limit`
  const selected = shuffled.slice(0, limit);

  // 4. Convert to FeaturedList format
  const formatted = selected.map((item) => ({
    label: item.label,
    Icon: item.Icon,
    iconSize: 15,
  }));

  return {
    selected: formatted,
    totalAvailable,
  };
}
