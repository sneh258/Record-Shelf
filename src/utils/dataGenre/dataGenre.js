export const getGenre = (musicData) => {
    const genre = [];
    musicData.map((data) => {
        genre.push(data.genre.name)
    })

    const uniqueGenre = new Set(genre);
    return Array.from(uniqueGenre);

}