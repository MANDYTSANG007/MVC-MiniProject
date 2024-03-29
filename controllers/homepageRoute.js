const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
      const userData = await User.findAll({
          attribute: { exclude: ['password'] },
      });

      const users = userData.map((project) => project.get({ plain: true}));
  
      res.render('homepage', { users });
      
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;