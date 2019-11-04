const express = require('express')
router = express.Router();

router.get('/', (req,res)=>res.send('test'));
router.get('/about',(req,res)=>res.send('about test'));

module.exports = router;