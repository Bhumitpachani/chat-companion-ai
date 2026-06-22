// Female companion names — for male users
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

// Male companion names — for female users
export const COMPANION_NAMES_MALE = [
  "Arjun", "Rohan", "Aditya", "Karan", "Dev", "Vikram", "Aman", "Varun",
  "Neil", "Kabir", "Ishaan", "Rishi", "Ankit", "Ayush", "Dhruv", "Pranav",
  "Yash", "Rahul", "Siddharth", "Akash", "Nikhil", "Gaurav", "Tanmay", "Shreyas",
  "Mihir", "Veer", "Aryan", "Kunal", "Sahil", "Parth", "Aniket", "Harsh",
  "Shivam", "Kartik", "Lakshya", "Naman", "Omkar", "Prateek", "Raghav", "Sameer",
  "Tushar", "Uday", "Vinay", "Waqar", "Xav", "Yuvraj", "Zaid", "Abhishek",
  "Bhuvan", "Chirag", "Deepak", "Eshan", "Farhan", "Gautam", "Hemant", "Ishan",
];

function pickUnique(names: string[], storageKey: string): string {
  let used: string[] = [];
  try {
    used = JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {}
  let pool = names.filter((n) => !used.includes(n));
  if (pool.length === 0) {
    used = [];
    pool = names;
  }
  const name = pool[Math.floor(Math.random() * pool.length)];
  used.push(name);
  try {
    localStorage.setItem(storageKey, JSON.stringify(used));
  } catch {}
  return name;
}

export function pickUniqueCompanion(): string {
  return pickUnique(COMPANION_NAMES, "cm_used_names");
}

export function pickUniqueCompanionMale(): string {
  return pickUnique(COMPANION_NAMES_MALE, "cm_used_names_male");
}
