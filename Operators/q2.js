let productName = " wireless headphones PRO ";

let cleanedName = productName.trim().toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition");

console.log(`Cleaned Title: ${cleanedName}`);
console.log(`Title Length: ${cleanedName.length}`);
