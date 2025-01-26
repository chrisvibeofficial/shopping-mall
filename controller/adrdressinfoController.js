const addressModel = require('../models/addressinfo');
const { v4: uuidv4 } = require('uuid');

exports.createUserAddress = async (req, res) => {
  try {
    const { userId, street, city, state} = req.body;
    const existingUserAddress = await addressModel.findAll({ where: { userId: userId } })

    if (existingUserAddress.length == 1) {
      return res.status(400).json('Address already exist')
    }

    const newUser = await addressModel.create({
      id: uuidv4(),
      userId,
      street,
      city,
      state
    })

    res.status(201).json({
      message: 'New address created successfully for user',
      data: newUser
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}