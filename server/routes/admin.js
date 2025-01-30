const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

const adminLayouts = '../views/layouts/admin';

router.post('/admin', async (req, res) => {
    try {
    const { username, password } = req.body;
    console.log(req.body)
    res.redirect('./admin') // for testing purposes

      res.render('admin/index', { locals, layout: adminLayouts });
    } catch (error) {
      console.log(error);
    }
  });

/**
 * GET /
 * ADMIN - Login Page
*/
router.get('/admin', async (req, res) => {
  try {
    const locals = {
        title: "Admin",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
      }

    res.render('admin/index', { locals, layout: adminLayouts });
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;