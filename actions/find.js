module.exports = (Model) => (req, res, query = {}) =>
    Model.find(query, (err, data) => {
        if (err) return console.log('ERROR: ', err)

        return res.json(data)
    })