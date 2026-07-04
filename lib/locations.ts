export type ProvinceLocation = {
  name: string;
  cities: string[];
};

export const provinceLocations: ProvinceLocation[] = [
  { name: "Alberta", cities: ["Calgary", "Edmonton", "Lethbridge", "Red Deer"] },
  {
    name: "British Columbia",
    cities: ["Abbotsford", "Burnaby", "Kamloops", "Kelowna", "Nanaimo", "Surrey", "Vancouver", "Victoria"],
  },
  { name: "Manitoba", cities: ["Winnipeg"] },
  { name: "New Brunswick", cities: ["Fredericton", "Moncton", "Saint John"] },
  { name: "Newfoundland and Labrador", cities: ["St. John's"] },
  { name: "Nova Scotia", cities: ["Dartmouth", "Halifax"] },
  {
    name: "Ontario",
    cities: [
      "Ajax",
      "Barrie",
      "Brampton",
      "Brantford",
      "Burlington",
      "Cambridge",
      "Chatham-Kent",
      "Clarington",
      "Guelph",
      "Hamilton",
      "Kingston",
      "Kitchener",
      "London",
      "Markham",
      "Mississauga",
      "Oakville",
      "Oshawa",
      "Ottawa",
      "Richmond Hill",
      "Sudbury",
      "Thunder Bay",
      "Toronto",
      "Vaughan",
      "Windsor",
    ],
  },
  { name: "Quebec", cities: ["Gatineau", "Laval", "Longueuil", "Montreal", "Quebec City", "Sherbrooke", "Trois-Rivières"] },
  { name: "Saskatchewan", cities: ["Regina", "Saskatoon"] },
];

export const LOCATION_PREVIEW_COUNT = 10;
