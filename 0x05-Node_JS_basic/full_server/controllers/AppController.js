/**
 * Contains the miscellaneous route handlers.
 * @author Kevin COOVI <https://github.com/kcoovi>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send("Hello Holberton School!");
  }
}

export default AppController;
module.exports = AppController;
