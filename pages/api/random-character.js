import Chance from "chance";

export default function handler(req, res) {
  const chance = new Chance();
  const chanceObject = {
    firstName: chance.first(),
    lastName: chance.last(),
    profession: chance.profession(),
  };
  res.status(200).json(chanceObject);
  res.status(404).json("Not found");
}
