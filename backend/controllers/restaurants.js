const restaurantRouter = require('express').Router()
const Restaurant = require('../models/restaurant')

restaurantRouter.get('/', async (request, response) => {
    const restaurants = await Restaurant.find({})
    response.json(restaurants)
})

restaurantRouter.post('/', async (request, response) => {
    const body = request.body
    const restaurant = Restaurant(body)
    try {
        const savedRestaurant = await restaurant.save()
        response.status(201).json(savedRestaurant)
    }
    catch (expection) {
        console.log(expection)
    }
})

module.exports = restaurantRouter
