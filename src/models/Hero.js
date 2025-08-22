import { db } from "../../firebaseConfig";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";

export default class Hero {
  constructor(id, name, gender, powers, species, publisher, date, height, image) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.powers = powers;
    this.species = species;
    this.publisher = publisher;
    this.date = date;
    this.height = height;
    this.image = image;
  }

  static getRef() {
    return doc(db, "Herodle", "data");
  }

  static async getAllHeroes() {
    const snapshot = await getDocs(collection(db, "heroes"));
    return snapshot.docs.map(d => new Hero(
      d.id,
      d.data().name,
      d.data().gender,
      d.data().powers,
      d.data().species,
      d.data().publisher,
      d.data().date,
      d.data().height,
      d.data().image
    ));
  }
  static heroesEqual(a, b) {
  if (!a || !b) return false;

  return (
    a.name?.toLowerCase() === b.name?.toLowerCase() &&
    a.gender?.toLowerCase() === b.gender?.toLowerCase() &&
    JSON.stringify([...a.powers].sort()) === JSON.stringify([...b.powers].sort()) &&
    a.species?.toLowerCase() === b.species?.toLowerCase() &&
    a.publisher?.toLowerCase() === b.publisher?.toLowerCase() &&
    a.date === b.date &&
    a.height === b.height
  );
}
  async add() {
    const hero = {
      name: this.name,
      gender: this.gender,
      powers: this.powers,
      species: this.species,
      publisher: this.publisher,
      date: this.date,
      height: this.height,
      image: this.image
    };
    const newDoc = await addDoc(collection(db, "heroes"), hero);
    this.id = newDoc.id;
    return this;
  }
}
