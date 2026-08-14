export default class Events {
    constructor(id, title, date, time, description, price, spots, category, imageId){
        this.id = id;
        this.title = title;
        this.date = date;
        this.time = time;
        this.description = description;
        this.price = price;
        this.spots = spots;
        this.category = category;
        this.imageId = imageId;
    }
        getImageURL = () => {
            return '/* NEED TO ADD IMAGE URL */' + this.imageId;
        };
}

