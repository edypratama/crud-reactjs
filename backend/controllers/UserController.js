import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const data = {...req.body, address:req.body.address.join(', ')}
    await User.create(data);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const {address} = req.body
    if(typeof address === 'string') {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    }else{
      const data = {...req.body, address:req.body.address.join(', ')}
      await User.update(data, {
        where: {
          id: req.params.id,
        },
      });
    }

   
    res.status(201).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).json({ msg: "User Deleted" });
    } catch (error) {
      console.log(error.message);
    }
  };