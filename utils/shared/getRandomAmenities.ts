import { getRandomItems } from "./getRandomItems";

// roomAmenities is now the *actual list* coming from the room card
export function getRandomRoomAmenities<T>(roomAmenities: T[], limit = 6) {
  return getRandomItems(roomAmenities, limit);
}
