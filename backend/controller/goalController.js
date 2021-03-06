const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//get goals
//GET /api/goals
//Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
})

//post goals
//POST /api/goals
//Private
const setGoals = asyncHandler(async (req, res) => {
    // console.log(req.body)

    if(!req.body.text){
        res.status(400)
        
        throw new Error('please add a text')
    }

    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal);
})

//update goals
//PUT /api/goals/:id
//Private
const updateGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal);

})

//delete goals
//DELETE /api/goals/:id
//Private
const deleteGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    await goal.remove()
    res.status(200).json({id: req.params.id});

})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
    
}