export default function SortHealthLevel(arrObject) {
  arrObject.sort((a, b) => b.health - a.health);
}
SortHealthLevel(
  [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ],
);
