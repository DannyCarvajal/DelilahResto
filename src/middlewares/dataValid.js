const { check, validationResult } = require("express-validator");

module.exports = [

    check('Nickname', 'Name must be +4 chars' )
    .isLength({min:4,max:12})
    .not()
    .isEmpty(),

    check('Name', 'Nickname must be +4 chars')
    .isLength({min:4,max:12})
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

