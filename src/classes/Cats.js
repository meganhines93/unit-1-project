export default class Cats {
    constructor(id, name, age, color, breed, personality, description, imageId, available, gender, adoptionFee) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.personality = personality;
        this.description = description;
        this.imageId = imageId;
        this.available = available;
        this.gender = gender;
        this.adoptionFee = adoptionFee;
    }
        getImageURL = () => {
            return 'https://i.ibb.co/' + this.imageId;
        }
    };
}