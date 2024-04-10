export function cookingStyleText(id) {
  if (id == 1) {
    return "Grilled";
  }
  return "Smoked";
}

export function skillLevelText(id) {
  switch (id) {
    case 1:
      return "Beginner";
    case 2:
      return "Intermediate";
    case 3:
      return "Expert";
    default:
      return "Unknown";
  }
}

export function foodTypeText(id) {
  switch (id) {
    case 1:
      return "Seafood";
    case 2:
      return "Pork";
    case 3:
      return "Beef";
    case 4:
      return "Poultry";
    case 5:
      return "Pizza";
    case 6:
      return "Beef Pork";
    default:
      return "Unknown";
  }
}
