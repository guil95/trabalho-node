module.exports = (Model) => (req, res) => {
    const body = req.body
    console.log("Data:", body)
  
    Model.create(body, (err, data) => {
      if (err) return console.log('ERROR: ', err)
  
      return res.json(data)
    })
  }