import express from 'express';
import { upload } from '../controllers/uploadControllers.js';
import { PORT } from '../config/index.js';

const router = express.Router();

router.post('/upload', upload.single('product'), (req, res) => {

    if (req.file) {
        res.status(200).json({
            message: 'File uploaded successfully!',
            success:1,
            image_url:`http://localhost:${PORT}/images/${req.file.filename}`
        });
    } else {
        res.status(400).json({ message: 'File upload failed!' });
    }
});

export default router;
