const User = require('../models/User');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  // password validation here...
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token })
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email }).select('+password');
    console.log(user);
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    //compare password use built-in func
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        // create json token for valid user
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user: { id: user.id, name: user.name } }, SECRET, { expiresIn: '24h' });
}
