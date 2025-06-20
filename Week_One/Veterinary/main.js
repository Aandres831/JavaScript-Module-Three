

console.log("Hi, welcome to Veterinarymals");

// 1. Data (Global list of pets)
let pets = [];

// 2. Logic (Arrow Functions)

// Function to register a new pet
const registerPets = () => {
    const name = prompt("Enter pet's name:");
    const species = prompt("Enter the pet species (dog, cat, iguana):");
    const age = parseInt(prompt("Enter the pet age:"), 10);
    const vaccinated =
    prompt("Is the pet vaccinated? (yes/no):").toLowerCase() === "yes";

  // Add the pet to the list
    pets.push({ name, species, age, vaccinated });
    console.log(" Pet added successfully." + pets);
};

// Function to search a pet by name
    const searchByName = () => {
        const name = prompt("Enter name to search:");
        const result = pets.find((p) => p.name.toLowerCase() === name.toLowerCase());

    // Display result
        result
        ? console.log(" Pet found:", result)
        : console.log(" Pet not found.");
};














