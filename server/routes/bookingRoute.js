const express = require("express");
const moment = require("moment");
const stripe = require("stripe")("sk_test_51Q4IJjGSgXSplNXXYGhQLJJuLKEYRgb1oZAuOiFdKltxJ0Naud5uLpWEK59JlxorUzfS5LqpdGhOq4uH8naPyBJv00GCc5YojM"); //
const { v4: uuidv4 } = require("uuid"); //https://www.npmjs.com/package/uuid

const router = express.Router();

const Booking = require("../models/booking");
const Room = require("../models/room");

router.post("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/cancelbooking", async (req, res) => {
  const { bookingid, roomid } = req.body;
  try {
    const booking = await Booking.findOne({ _id: bookingid });

    booking.status = "cancelled";
    await booking.save();
    const room = await Room.findOne({ _id: roomid });
    const bookings = room.currentbookings;
    const temp = bookings.filter((x) => x.bookingid.toString() !== bookingid);
    room.currentbookings = temp;
    await room.save();

    res.send("Your booking cancelled successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/getbookingbyuserid", async (req, res) => {
  const { userid } = req.body;
  try {
    const bookings = await Booking.find({ userid: userid });

    res.send(bookings);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});



router.post("/bookroom", async (req, res) => {
  try {
    const { room, userid, fromdate, todate, totalAmount,guestname,guestcount, totaldays, token } =
      req.body;

    try {
      //create customer
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });

      //charge payment
      const payment = await stripe.charges.create(
        {
          amount: totalAmount * 100,
          customer: customer.id,
          currency: "INR",
          receipt_email: token.email,
        },
        {
          idempotencyKey: uuidv4(),
        }
      );

      //Payment Success
      if (payment) {
        try {
          const newBooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate: moment(fromdate).format("DD-MM-YYYY"),
            todate: moment(todate).format("DD-MM-YYYY"),
            guestname,
            guestcount,
            totalamount: totalAmount,
            totaldays,
            transactionid: uuidv4(),
          });

          const booking = await newBooking.save();

          const roomTmp = await Room.findOne({ _id: room._id });
          roomTmp.currentbookings.push({
            bookingid: booking._id,
            fromdate: moment(fromdate).format("DD-MM-YYYY"),
            todate: moment(todate).format("DD-MM-YYYY"),
            guestname:guestname,
            guestcount:guestcount,
            userid: userid,
            status: booking.status,
          });

          await roomTmp.save();
          res.send("Payment Successful, Your Room is booked");
        } catch (error) {
          return res.status(400).json({ message: error });
        }
      }
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
