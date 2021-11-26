"use strict"

const express = require('express')
const V = require('../validator/validator.js')
const threadService = require('../services/threadService.js')

const router = express.Router();


router.get('/:input',
    V.params({ input: V.string(3) }),
    V.query(
        {
            offset: V.number().round().default(0),
            limit: V.number(1, 100).round().default(100)
        }),
    async (req, res) => {
        let input = req.params.input

        let result = await threadService.findThreads(input, req.query.offset, req.query.limit)

        let queryCount = await threadService.countFindThreads(input)

        res.append('-Offset', req.query.offset)
        res.append('-Limit', req.query.limit)
        res.append('-Count', queryCount)

        res.status(200).send(result)

    }
)

module.exports = router