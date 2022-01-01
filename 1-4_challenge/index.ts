const houses = [
  { name: 'Atreides', planets: 'Calladan' },
  { name: 'Corrino', planets: ['Kaitan', 'Salusa Secundus'] },
  { name: 'Harkonnen', planets: ['Giedi Prime', 'Arrakis'] },
];

interface House {
  name?: string;
  planets?: string | string[];
}

interface HouseWithID {
  name?: string;
  planets?: string[];
  id: number;
}

type FilterHouses = (house: House) => boolean;

function genIdToEachObjectOfArray(items: any[], allOfItems?: any): any[] {
  return items.map((item: any) => ({ ...item, id: allOfItems.indexOf(item) }));
}

// function findHouses(houses: string): HouseWithID[];
// function findHouses(houses: string, filter: FilterHouses): HouseWithID[];
// function findHouses(houses: House[]): HouseWithID[];
// function findHouses(houses: House[], filter: FilterHouses): HouseWithID[];
function findHouses(houses: House[] | string, filter?: FilterHouses): HouseWithID[] {
  if (typeof houses === 'string') {
    houses = JSON.parse(houses) as House[];
  }

  const housesFiltered = filter ? houses.filter(filter as (house: House) => boolean) : houses;
  return genIdToEachObjectOfArray(housesFiltered, houses as House[]) as HouseWithID[];
}

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides'));
console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
