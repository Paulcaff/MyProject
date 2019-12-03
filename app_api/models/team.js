const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({ 
    position:{
        type: String,
    //required: true
},
    name:{
        type: String,
    //required: true
},
    weight:{
        type: Number,
      //  required: true
},
    age:{
        type: Number,
        //required: true
},
    image:{
        type: String,
        //required: true
    
},
    number:{
        type: Number,
        //required: true

}
});

const userSchema = new mongoose.Schema({ 
    firstname:{
        type: String,
    required: true
},
    lastname:{
        type: String,
    required: true
},
    username:{
        type: String,
    required: true
},
    email:{
        type: String,
    required: true
},
    password:{
        type: String,
    required: true
}
});

const teamSchema = new mongoose.Schema({ 
    username:{
        type: String,
        required: true
    
},
    team:[playerSchema]   
});


mongoose.model('player', playerSchema);
mongoose.model('user', userSchema);
mongoose.model('team', teamSchema);