"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}

module.exports = (knex) => {

    app.post("/login", (req, res) => {

        knex('players')
      .insert(
          { name: req.body.username})
      .asCallback((err) => {
          console.log('test');
        if(err){
            console.log(err);
        }
        knex.destroy();
      }
    )});
}



