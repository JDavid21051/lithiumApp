export interface PokeDataEvent {
    onClick?: () => void
}

export interface PokeInfoModel {
    id?: number,
    title: string,
    imageUrl: string,
    url: string,
    type: string,
    publish_by: string,
    publish_at: string,
}

export type PokeDataModel = PokeInfoModel & PokeDataEvent;