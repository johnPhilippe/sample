const express = require('express');
const recipeRoute = express.Router();
// model
let recipeModel = require('../models/recipe');
recipeRoute.route('/create-recipe').post((req, res, next) => {
  recipeModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
recipeRoute.route('/').get((req, res, next) => {
  recipeModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 recipeRoute.route('/edit-recipe/:id').get((req, res, next) => {
  recipeModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
recipeRoute.route('/update-recipe/:id').put((req, res, next) => {
  recipeModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Recipe successfully updated!')
    }
  })
})
// Delete
recipeRoute.route('/delete-recipe/:id').delete((req, res, next) => {
  recipeModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = recipeRoute;