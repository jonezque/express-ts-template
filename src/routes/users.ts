import express, { Request, Response } from 'express';

const router = express.Router();
/* GET users listing. */
router.get('/', function(_req: Request, res: Response) {
    res.send('respond with a resource');
});

router.get('/:id', function(req: Request, res: Response) {
    console.log(234);
    res.send('respond with a resource ' + req.params.id);
});

router.post('/login', function(req: Request, res: Response) {
    if (req.body.login === 'testlogin' && req.body.password === 'testpassword') {
        res.send(req.user);
    }
    res.send('not ok');
});

export default router;
