export interface CardDateModel {
    title: string,
    imageUrl: string,
    url: string,
    type: string,
    publish_by: string,
    publish_at: string,
    onClick?: () => void
}