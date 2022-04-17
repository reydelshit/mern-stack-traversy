const asyncHandler = require('express-async-handler')

//get goals
//GET /api/goals
//Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'hello reydel'});
})

//post goals
//POST /api/goals
//Private
const setGoals = asyncHandler(async (req, res) => {
    console.log(req.body)

    if(!req.body.test){
        res.status(400)
        
        throw new Error('please add a text in test')
    }
    res.status(200).json({message: 'post reydel'});
})

//update goals
//PUT /api/goals/:id
//Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `hello put ${req.params.id}`});
})

//delete goals
//DELETE /api/goals/:id
//Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `hello delete ${req.params.id}`});

})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
    
}