import express from 'express';
import { Promo } from '../models/promoModel.js';
import { promoMail } from '../utils/emailService.js';
import axios from "axios";



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



router.post('/email', async (req, res) => {
    try {
      const { promoID, promoName, promoDescription } = req.body;
    
      // Retrieve promo details based on promoID
      const promoDetailsResponse = await axios.get(`http://localhost:8080/promo/${promoID}`);
      const { name, description } = promoDetailsResponse.data;
    
      // Fetch user data from the server
      const usersResponse = await axios.get('http://localhost:8080/users');
      const users = usersResponse.data;
    
      // Filter out emails of users who have promo set to true
      const promoEmails = users.data.filter(user => user.promo).map(user => user.email);
    
      // Send registration confirmation email to promo emails with promo details
      await promoMail(promoEmails, name, description);
    
      res.json({ message: 'Emails sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
  




export default router;

