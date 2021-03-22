/** @format */

const multer = require('multer');
const express = require('express');
const isAuth = require('../utils/isAuth');
const path = require('path');
// const generateToken = require('../utils/generateToken');

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now() + path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  // limits: {
  //   fileSize: 1024 * 1024,
  // },
  fileFilter: fileFilter,
});

uploadRouter.post('/', isAuth, upload.single('image'), async (req, res) => {
  // user.image = `http://localhost:5002/uploads${req.file.path}`;

  res.send(`${req.file.path}`);
});

module.exports = uploadRouter;

// try {
//     console.log('req.user: ', req.user);
//     const user = await User.findOne({ _id: req.user._id });
//     console.log('user: ', user);
//     user.image = `http://localhost:5002/uploads${req.file.path}`;
//     const updatedUser = await user.save();
//     console.log('updatedUser: ', updatedUser);

//     const response = {
//       _id: updatedUser._id,
//       first_name: updatedUser.first_name,
//       last_name: updatedUser.last_name,
//       username: updatedUser.username,
//       phone_number: updatedUser.phone_number,
//       email: updatedUser.email,
//       image: updatedUser.image,
//       token: generateToken(updatedUser),
//     };
//     return res.status(201).json({
//       message: 'Фото обновленно',
//       response,
//     });
//   } catch (e) {
//     res.status(500).send({ message: 'Something went wrong' });
//   }
