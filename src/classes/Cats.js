export default class Cats {
    constructor(id, name, age, color, breed, personality, description, imageId, available) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.personality = personality;
        this.description = description;
        this.imageId = imageId;
        this.available = available;
    }
        getImageURL = () => {
            return '/* NEED TO ADD IMAGE URL */' + this.imageId;
        }
    };
}