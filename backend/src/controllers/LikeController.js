const Dev = require('../models/Dev');

class LikeController {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: 'dev not exists' });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('DEU MATCH 💕');
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
}

module.exports = new LikeController();
