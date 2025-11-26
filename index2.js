function cleanList(guests) {
  return guests.filter((guest) => guest !== "");
}

const guests = ["Anna", "", "George", "", "Saba", "Nick", ""];

const cleanedGuests = cleanList(guests);
console.log(guests);
console.log(cleanedGuests);
