const ak: Array<{ name: string }> = [
  { name: "rahul" },
  { name: "jaydeep" },
  { name: "bottle" },
  { name: "darsh" },
  { name: "rahul" },
];

console.log(ak.sort((a, b) => a.name.localeCompare(b.name)));