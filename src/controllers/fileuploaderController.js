const SingleFile = require('../models/singlefile');

exports.singleFileUpload = async (req, res, next) => {
  try {
    const file = new SingleFile({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
      idProducto: req.body.id,
    });
    console.log(`req.id : ${JSON.stringify(req.body.id)}`);
    await file.save();
    res.status(201).send('File Uploaded Successfully');
  } catch (error) {
    res.status(400).send(`nel ${error.message}`);
  }
};

exports.getallSingleFiles = async (req, res, next) => {
  try {
    const files = await SingleFile.find();
    res.json(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.delete_imagen = async (req, res) => {
  try {
    const ret = await SingleFile.deleteOne({ _id: req.params.idImagen });
    res.json({ message: 'Deleted image' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];
};
