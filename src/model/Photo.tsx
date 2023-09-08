class Photo {
    private albumId: number,
    private id: number,
    private title: string,
    private url: string,
    private thumbnailUrl: string

    public constructor(
        albumId: number,
        id: number,
        title: string,
        url: string,
        thumbnailUrl: string
    ) {
        this.albumId = albumId;
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }
}

export default Photo;