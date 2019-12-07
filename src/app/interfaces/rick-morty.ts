export interface CharacterInterface {
    id: number,
    name: string,
    image: string,
    species: string,
    gender: string,
    location: Ilocation,

}

export interface Ilocation{
    name: string,
}

export interface CharacterResponseInterface {
    info: object,
    results: CharacterInterface[],
}