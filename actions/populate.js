module.exports = (Model) => (req, res) => {
  const query = {
    _id: req.params.id
  }
  Model.findOne(query)
    .populate('teacher')
    .populate('students')
    .populate('books')
    .then((data) => res.json(data))
    .catch((err) => res.send(err.message))
}