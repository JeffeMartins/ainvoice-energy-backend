import express from 'express';
import multer from 'multer';
import path from 'path';

const upload = multer({ dest: path.resolve(__dirname, '../../../../uploads') });

export const staticFiles = express.static(path.resolve(__dirname, '../../../../uploads'));

export const jsonMiddleware = express.json();

export const uploadMiddleware = upload.single('file');
