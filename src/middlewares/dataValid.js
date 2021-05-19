import { check, validationResult } from "express-validator";

export const userDataValidation = [

    check('Nickname', 'Name must be +4 chars and -15 chars' )
    .isLength({min:4,max:15})
    .not()
    .isEmpty(),

    check('Name', 'Nickname must be +4 chars and -15 chars')
    .isLength({min:4,max:15})
    .not()
    .isEmpty(),

    check('Email', 'Not valid Email')
    .not()
    .isEmpty()
    .isEmail()
    .normalizeEmail()
    ,

    check('Password', 'Password must be +4 chars and contain a number')
    .isLength({min:4,max:12})
    .not()
    .isEmpty()
    .matches(/\d/)
,

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()})

        next()

    }
]

