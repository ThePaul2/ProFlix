

























/*






import { User } from '../models/userModel.js';

const router = express.Router();

// Route for saving a new User
router.post('/', async (request, response) => {
  try {
    const { firstName, lastName, email } = request.body;
    if (!firstName || !lastName || !email) {
      return response.status(400).send({
        message: 'Please provide all required fields: firstName, lastName, email',
      });
    }

    // Additional validation for email could be added here

    const newUser = await User.create({ firstName, lastName, email });
    return response.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

// Route for getting all users
router.get('/', async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json({ count: users.length, data: users });
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

// Route for getting one user by id
router.get('/:id', async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json(user);
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

// Route for updating a user
router.put('/:id', async (request, response) => {
  try {
    const { firstName, lastName, email } = request.body;
    if (!firstName || !lastName || !email) {
      return response.status(400).send({
        message: 'Please provide all required fields: firstName, lastName, email',
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      { firstName, lastName, email },
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

// Route for deleting a user
router.delete('/:id', async (request, response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(request.params.id);
    if (!deletedUser) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

export default router;
 */