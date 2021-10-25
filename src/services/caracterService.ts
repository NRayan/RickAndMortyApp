import api from "./api";

type characterProps = {
    id: number,
    name: string,
    image: string,
    species: string,
    gender: string,
    status: string,
    origin: string
}

async function getPage(page: number, filter: string): Promise<characterProps[]> {

    try {
        const url = `/character/?page=${page}&name=${filter}`;
        const response: any = await api.get(url);
        const items = buildObject(response.data.results);
        return items;
    } catch (error) {
        return [];
    }

}

async function getSomeCharacters(): Promise<characterProps[]> {

    const randomNumbers = getRandomNumbers();

    const response: any = await api.get(`/character/${randomNumbers}`);
    const items = buildObject(response.data);
    return items;

}

function buildObject(data: any[]): characterProps[] {

    const buildedItems: characterProps[] = data.map(item => {
        const buildedItem: characterProps = {
            id: item.id,
            name: item.name,
            image: item.image,
            species: item.species,
            gender: item.gender,
            status: item.status,
            origin: item.origin.name,
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
        const Random = Math.floor(Math.random() * 671) + 1;
        if (numbers.indexOf(Random) === -1)
            numbers.push(Random);
    }

    numbers.forEach(n => {
        if (numbers.indexOf(n) !== 0) formatedString += (',')
        formatedString += n
    })

    return formatedString;

}


export { characterProps, getPage, getSomeCharacters }

