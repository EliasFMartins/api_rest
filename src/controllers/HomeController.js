class HomeController {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (erro) {
      console.log(erro);
    }
  }
}
export default new HomeController(); // para exportar instaciada e so colocar new e o parantes
