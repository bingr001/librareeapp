let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Book Model
let bookSchema = require('../models/Book');

// CREATE Book
router.route('/create-book').post((req, res, next) => {
  const auth = req.currentUser;
  bookSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }if (auth) {
      console.log('authenticated!!!', auth);    }
  })
});

// READ Books
router.route('/').get((req, res, next) => {
  bookSchema.find(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Book
router.route('/edit-book/:id').get((req, res, next) => {
  bookSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Book
router.route('/update-book/:id').put((req, res, next) => {
  bookSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Book updated successfully !')
    }
  })
})

// Delete Book
router.route('/delete-book/:id').delete((req, res, next) => {
  bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})



module.exports = router;