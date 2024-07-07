const carInfo = {
    Brand: "Mercedes",
    model: "CLK Class",
    year: 1999,
    color: "silver",
    engine: "2.5L Petrol Kompressor",
    summary: function() {
        return `This car is a ${this.year} ${this.Brand} ${this.model} in ${this.color} color with a ${this.engine} engine.`;
    }
};

console.log(carInfo.summary());