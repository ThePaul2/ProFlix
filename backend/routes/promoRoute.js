import express from 'express';
import { Promo } from '../models/promoModel.js';

const router = express.Router();

// Route for creating a new promo
router.post('/', async (req, res) => {
    try {
        const newPromo = await Promo.create(req.body);
        res.status(201).json(newPromo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting all promos
router.get('/', async (req, res) => {
    try {
        const promos = await Promo.find({});
        res.status(200).json(promos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting a single promo by ID
router.get('/:id', async (req, res) => {
    try {
        const promo = await Promo.findById(req.params.id);
        if (!promo) {
            return res.status(404).json({ message: 'Promo not found' });
        }
        res.status(200).json(promo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for updating a promo by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedPromo = await Promo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPromo) {
            return res.status(404).json({ message: 'Promo not found' });
        }
        res.status(200).json(updatedPromo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for deleting a promo by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedPromo = await Promo.findByIdAndDelete(req.params.id);
        if (!deletedPromo) {
            return res.status(404).json({ message: 'Promo not found' });
        }
        res.status(200).json({ message: 'Promo deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
