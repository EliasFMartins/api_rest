import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');
class FotoController {
  // eslint-disable-next-line consistent-return
  async store(req, res) {
    try {
      return upload(req, res, (error) => {
        if (error) {
          return res.status(400).json({
            errors: [error.code],
          });
        }

        return res.json(req.file);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
export default new FotoController(); // para exportar instaciada e so colocar new e o parantes
