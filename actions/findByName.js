module.exports = (Model) => (req, res, query) => {
  const name = {
    'name': { '$regex': query.name, $options: 'i' }
  }
  Model.find(name)
    .then((data) => res.json(data))
    .catch((err) => res.send(err.message))
}