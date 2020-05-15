const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/',(req,res)=>{
    Recipes.getRecipes().then(recipes=>{
        res.status(200).json(recipes)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message: 'Fail to get recipes'
        });
    });
});

router.get('/:id/shopping',(req,res)=>{
    const {id} = req.params;

    Recipes.getShoppingList(id).then(shopping=>{
        if(shopping){
            res.status(200).json(shopping)
        } else {
            res.status(404).json({
                message: 'Could not find shopping list with the given recipe ID'
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message: 'Failed to get recipe'
        })
    })
})

router.get('/:id/instruction',(req,res)=>{
    const {id} = req.params;

    Recipes.getInstructions(id).then(instruction=>{
        if(instruction){
            res.status(200).json(instruction)
        } else {
            res.status(404).json({
                message: 'Could not find shopping list with the given recipe ID'
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message: 'Failed to get recipe'
        })
    })
})

module.exports = router;