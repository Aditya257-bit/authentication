const { check } = require('express-validator');

exports.signupValidator = [
    check('firstName', 'First Name is required!')
        .not()
        .isEmpty()
        .isAlpha()
        .withMessage('First name is required!'),
    check('lastName')
        .not()
        .isEmpty()
        .isAlpha()
        .withMessage('Last name is required!'),
    check('email')
        .isEmail()
        .withMessage('Invalid email'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be atleast 6 char long')        
]

exports.signinValidator = [
    check('email')
        .isEmail()
        .withMessage('Invalid email'),
    check('password')
        .isLength({min: 6})    
        .withMessage('Password must be atleast 6 char long')
]

exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Invalid email')
]

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({min: 6})
        .withMessage('Password must be atleast 6 char long')
]