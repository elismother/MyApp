var express = require('express')
var router = express.Router();

// mock some data
const pets = [
    {
        id: 21,
        name: "Tiny Terror Floof",
        breed: "Black Cat",
        notes: [
            "Is Deaf"
        ]
    },
    {
        id: 13,
        name: "TAZ",
        breed: "Black Tabby Cat",
        notes: [
            "Is a Jerk"
        ]
    },
    {
        id: 42,
        name: "Rogue",
        breed: "Tabby Cat",
        notes: [
            "Is Fatty Fat Fat",
            "Sent Jesse to the hospital"
        ]
    }
];


// define our pet endpoints
// BASIC ENDPOINT EXAMPLE
// router.get('',() => {
//  DO API STUFF
// })

// GET REQUEST (/ INDICATES READ ALL)
router.get('/',(req, res) => {
    res.status(200);
    res.json(pets);
    
});

// get request: get a single pet by id
router.get('/:id', (req, res) => {

});

// POST take data and put it in our database
// Create:
// Read:
// Update: 
// Delete:
router.post('/', (req, res) => {

});

// PUT: UPDATE AN EXISTING PET
router.put('/:id', (req, res) => {

});

// DELETE: DELETE A PET
router.delete('/:id', (req, res) => {

});

module.exports = router;