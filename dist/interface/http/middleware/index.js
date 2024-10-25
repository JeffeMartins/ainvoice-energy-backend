import express from 'express';
import multer from 'multer';
import path from 'path';
// Configuração do multer
const upload = multer({ dest: path.resolve(__dirname, '../../../../uploads') });
// Middleware para arquivos estáticos (PDFs)
export const staticFiles = express.static(path.resolve(__dirname, '../../../../uploads'));
// Middleware para JSON
export const jsonMiddleware = express.json();
// Middleware para upload
export const uploadMiddleware = upload.single('file');
//# sourceMappingURL=index.js.map