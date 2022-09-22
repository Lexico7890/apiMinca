const notFound = (request, response, next) => {
  response.status(404).end()
  console.log("error url")
}

module.exports = {notFound}