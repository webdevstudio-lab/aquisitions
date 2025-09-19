import logger from '#config/logger.js';
import { formatValidationError } from '#utils/format.js';
import { signUpSchema } from '#validations/auth.validation.js';

export const signup = async (req, res, next) => {
  try {
    //validation data
    const validationResult = signUpSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        error: 'Validation Failed',
        details: formatValidationError(validationResult.error),
      });
    }

    const { name, email, password, role } = validationResult.data;

    // AUTH SERVICE

    logger.info('User Registered Succssfully : ${email}');

    res.status(201).json({
      message: 'User Registered Successfully',
      user: {
        name,
        email,
        role,
      },
    });
  } catch (e) {
    logger.error('Signup error', e);

    if (e.message === 'User with this email already exist') {
      return res.status(409).json({ message: 'Email already exist' });
    }

    next(e);
  }
};
