const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({ 
    position:{
        type: String,
    required: true
},
    name:{
        type: String,
    required: true
},
    weight:{
        type: Number,
    required: true
},
    age:{
        type: Number,
    required: true
},
    image:{
        type: String,
    required: true
}
});

mongoose.model('player', playerSchema);