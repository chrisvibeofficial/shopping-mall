const userModel = require('../models/userinfo');
const { v4: uuidv4 } = require('uuid');

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, gender, phoneNumber } = req.body;
    const existingUser = await userModel.findAll({ where: { email: email } })

    if (existingUser.length == 1) {
      return res.status(400).json('Email has already being used')
    }

    const newUser = await userModel.create({
      id: uuidv4(),
      firstName,
      lastName,
      email,
      gender,
      phoneNumber
    })

    res.status(201).json({
      message: 'New user created successfully',
      data: newUser
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

exports.getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.findAll();
    res.status(200).json({
      message: 'All user retrieved successfully',
      totalUser: allUser.length,
      allUser
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

exports.getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne({ where: { id: id } })

    if (!user) {
      return res.status(400).json('User not found')
    }
    res.status(200).json({
      message: 'Check user below',
      user
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findAll({ where: { id: id } });

    if (user.length == 0) {
      return res.status(400).json('User does not exist');
    }

    const { firstName, lastName, gender, phoneNumber } = req.body;
    const data = { firstName, lastName, gender, phoneNumber };
    const updatedUser = await userModel.update(data, { where: { id: id } });
    res.status(200).json({
      message: 'User updated successfully',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

exports.deleteUSer = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findAll({ where: { id: id } });

    if (user.length == 0) {
      return res.status(400).json('User does not exist');
    }

    const deleteUser = await userModel.destroy({ where: { id: id } })
    res.status(200).json('User deleted successfully')
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}