class DevController {
  store(req, res) {
    return res.json({ ok: true });
  }
}

module.exports = new DevController();
