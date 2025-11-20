// shared/amenities.ts

export interface Amenity {
  key: string;
  label: string;
}

export const amenities: Amenity[] = [
  { key: "dinning_table", label: "Dinning Area" },
  { key: "pi_towel", label: "Towel" },
  { key: "gr_fan", label: "Fan" },
  { key: "air_conditioning", label: "Air Conditioner" },
  { key: "table_top", label: "Table Top" },
  { key: "microwave", label: "Microwave" },
  { key: "kitchen", label: "Kitchen" },
  { key: "iron", label: "Iron" },
  { key: "stove", label: "Stove" },
  { key: "disability_friendly", label: "Disability Friendly" },
  { key: "refrigerator", label: "Refrigerator" },
  { key: "youtube", label: "YouTube" },
  { key: "closet", label: "Closet" },
  { key: "netflix", label: "Netflix" },
  { key: "toaster", label: "Toaster" },
  { key: "coffee_maker", label: "Coffee Maker" },
  { key: "wifi", label: "Wifi" },
  { key: "water_hot_cold", label: "Water Hot/Cold" },
  { key: "electric_keys", label: "Electric Keys" },
  { key: "laundry", label: "Laundry" },
  { key: "blender", label: "Blender" },
  { key: "smart_tv", label: "Smart TV" },
  { key: "couch", label: "Couch" },
  { key: "rooftop_access", label: "Rooftop Access" },
  { key: "beverage_included", label: "Beverage Included" },
  { key: "energy_24_7", label: "Energy 24/7" },
];
