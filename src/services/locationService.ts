import api from "./api";

type locationProps = {
    id: number,
    name: string,
    type: string,
    dimension: string,
}

async function getAll(): Promise<locationProps[]> {

    const response: any = await api.get('/location');
    const items = buildObject(response.data.results);
    return items;
}

async function getSomeLocations(): Promise<locationProps[]> {

    const randomNumbers = getRandomNumbers();

    const response: any = await api.get(`/location/${randomNumbers}`);
    const items = buildObject(response.data);
    return items;
}

function buildObject(data: any[]): locationProps[] {

    const buildedItems: locationProps[] = data.map(item => {
        const buildedItem: locationProps = {
            id: item.id,
            name: item.name,
            dimension: item.dimension,
            type: item.type,
        }

        return buildedItem;
    })

    return buildedItems;
}

function getRandomNumbers() {
    var numbers: number[], formatedString: string;

    formatedString = '';
    numbers = [];

    while (numbers.length < 8) {
        const Random = Math.floor(Math.random() * 108) + 1;
        if (numbers.indexOf(Random) === -1)
            numbers.push(Random);
    }

    numbers.forEach(n => {
        if (numbers.indexOf(n) !== 0) formatedString += (',')
        formatedString += n
    })

    return formatedString;
}

export { locationProps, getAll, getSomeLocations }

