<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const db = require('../config/database').db;

// Handling POST request for adding a user
router.post("/", (req, res) => {
    // Destructure the data from req.body
    const { bookingType, companyName, destination, guests, adate, ldate } = req.body;

    // Insert query based on booking type (hotel or flight)
    let qry;
    if (bookingType === 'hotel') {
        qry = "INSERT INTO internship.hotel_bookings(companyName, destination, guests, adate, ldate) VALUES (?, ?, ?, ?, ?)";
    } else if (bookingType === 'flight') {
        qry = "INSERT INTO internship.flight_bookings(companyName, destination, guests, adate, ldate) VALUES (?, ?, ?, ?, ?)";
    } else {
        return res.render("project", { msg: "Invalid booking type." });
    }

    // Execute the query with the provided data
    db.query(qry, [companyName, destination, guests, adate, ldate], (err, results) => {
        if (err) {
            console.error("Error occurred during query execution:", err);
            return res.render("project", { msg: "An error occurred during the booking process." });
        }

        // Check if the booking was added successfully
        if (results && results.affectedRows > 0) {
            res.render("project", { msg: "Booking added successfully!" });
        } else {
            res.render("project", { msg: "Failed to add booking." });
        }
    });
});

module.exports = router;
=======
const express=require('express');
const router=express.Router();
const db = require('../config/database').db;

router.get("/", (req, res) => {
    const {destination, guests, adate, ldate} = req.query;
                // insert query
                let qry = "insert into intership.book(destination, guests, adate, ldate) values(?,?,?,?)";
                db.query(qry, [destination, guests, adate, ldate], (err, results) => {
                    if (results.affectedRows > 0) {
                        res.render("project", { msg: true });
                    }
                });
            });

module.exports=router;
>>>>>>> 357b88cbc2cdf7c84a1f30ffac10e4502a161cc3
