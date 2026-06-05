// Unique Indian girl names pool — picked randomly, never repeat in same browser
export const COMPANION_NAMES = [
  "Priya", "Ananya", "Aisha", "Riya", "Diya", "Kavya", "Sneha", "Ishita",
  "Meera", "Pooja", "Nidhi", "Tanvi", "Aditi", "Shreya", "Neha", "Simran",
  "Anjali", "Pallavi", "Rhea", "Saanvi", "Mahi", "Kiara", "Avni", "Myra",
  "Sara", "Zara", "Trisha", "Naina", "Sanya", "Aaradhya", "Aarohi", "Anushka",
  "Bhavna", "Chitra", "Divya", "Esha", "Falguni", "Garima", "Hiral", "Ira",
  "Jhanvi", "Komal", "Lavanya", "Mansi", "Nikita", "Ojaswi", "Payal", "Radhika",
  "Sakshi", "Tanya", "Urvi", "Vanya", "Yashika", "Zoya", "Amrita", "Bhumi",
  "Charvi", "Devika", "Gauri", "Heena", "Inaya", "Juhi", "Khushi", "Lipika",
];

const STORAGE_KEY = "cm_used_names";

export function pickUniqueCompanion(): string {
  let used: string[] = [];
  try {
    used = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {}
  let pool = COMPANION_NAMES.filter((n) => !used.includes(n));
  if (pool.length === 0) {
    // reset cycle
    used = [];
    pool = COMPANION_NAMES;
  }
  const name = pool[Math.floor(Math.random() * pool.length)];
  used.push(name);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(used));
  } catch {}
  return name;
}

export const COMPANION_TRAITS = [
  "Loves Bollywood music 🎶",
  "Foodie at heart 🍕",
  "Coffee addict ☕",
  "Travel enthusiast ✈️",
  "Bookworm 📚",
  "Dance lover 💃",
  "Yoga & wellness 🧘",
  "Cricket fan 🏏",
  "Photography hobbyist 📸",
  "Sunset chaser 🌇",
];

export function randomTrait(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return COMPANION_TRAITS[h % COMPANION_TRAITS.length];
}
