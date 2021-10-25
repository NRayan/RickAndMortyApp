import api from "./api";

type seasonProps = {
    number: number,
    episodes: episodeProps[];
}

type episodeProps =
    {
        id: number,
        name: string,
        season: number,
        episodeNumber: number,
        releaseDate: string
    }


async function getAllEpisodes(): Promise<seasonProps[]> {

    try {
        var episodes: episodeProps[] = [];
        var nextUrl = `/episode/?page=1`;

        while (nextUrl != null) {
            const response: any = await api.get(nextUrl);
            const items = buildObject(response.data.results);
            episodes = [...episodes, ...items]
            nextUrl = response.data.info.next;
        }

        const seasons = buildSeasons(episodes);
        return seasons;

    } catch (error) {
        console.log(error);
        return []
    }
}

function buildSeasons(episodes: episodeProps[]): seasonProps[] {

    var seasons: seasonProps[] = [];
    const seasonNumbers = new Set(episodes.map((episode) => episode.season));

    seasonNumbers.forEach((seasonNumber) => {

        const auxSeason: seasonProps =
        {
            number: seasonNumber,
            episodes: episodes.filter((ep) => ep.season === seasonNumber),
        }

        seasons.push(auxSeason);
    })

    return seasons;
}

function buildObject(data: any[]): episodeProps[] {

    const buildedItems: episodeProps[] = data.map(item => {
        const buildedItem: episodeProps = {
            id: item.id,
            name: item.name,
            season: getSeasonNumber(item.episode),
            episodeNumber: getEpisodeNumber(item.episode),
            releaseDate: item.air_date,
        }

        return buildedItem;
    })

    return buildedItems;
}

function getSeasonNumber(text: string): number {
    const seasonString = text.substring(0, text.indexOf('E'));
    const number = seasonString.substring(1);
    return parseInt(number);
}

function getEpisodeNumber(text: string): number {
    const number = text.substring(text.indexOf("E") + 1);
    return parseInt(number);
}

export { getAllEpisodes, seasonProps, episodeProps }