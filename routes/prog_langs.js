const express = require('express');
const router = express.Router();
const proglangs = require('../services/prog_lang');

// GET Programming languages

router.get('/',async function(req,res,next){
    try{
        res.json(await proglangs.getMultiple(
            req.query.page
        ));
        // console.log(req.query);
    } catch (err) {
        console.error(`Error while getting prog langs `, err.message);
        next(err);
    }
});

router.post('/',async function(req,res,next){
    try{
        res.json(await proglangs.create(req.query));
        console.log(req.body);
    } catch(err){
        console.error(`Error while creating language `, err.message);
        next(err);
    }
});

router.put('/:id', async function(req,res,next){
    try{
        res.json(await proglangs.update(req.params.id, req.body));
    } catch (err){
        console.error(`Error while updation `, err.message);
        next(err);
    }
});

router.delete('/:id', async function(req,res,next){
    try{
        res.json(await proglangs.remove(req.params.id));
    } catch (err){
        console.error(`Error while deletion`, err.message);
        next(err);
    }
});

module.exports = router;