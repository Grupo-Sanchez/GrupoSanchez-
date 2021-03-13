'use strict';

const express = require('express');
const { upload } = require('../helpers/filehelper');
const {
  singleFileUpload,
  getallSingleFiles,
  delete_imagen,
} = require('../controllers/fileuploaderController');
const router = express.Router();

//router.route('/').get(getallSingleFiles).post(singleFileUpload);
router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);

router.route('/:idImagen').delete(delete_imagen);

module.exports = router;
