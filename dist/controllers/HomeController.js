"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (erro) {
      console.log(erro);
    }
  }
}
exports. default = new HomeController(); // para exportar instaciada e so colocar new e o parantes
