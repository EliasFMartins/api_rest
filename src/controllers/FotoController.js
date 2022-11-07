class FotoController {
  async store(req, res) {
    try {
      res.json(req.file);
    } catch (e) {
      console.log(e);
    }
  }
}
export default new FotoController(); // para exportar instaciada e so colocar new e o parantes
