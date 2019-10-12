import express, { Request, Response } from 'express';

const router = express.Router();
/* GET users listing. */
router.get('/', function(_req: Request, res: Response) {
    res.send([1, 2, 3, 4, 5]);
});

router.get('/:id', function(req: Request, res: Response) {
    res.send(req.params.id);
});

router.post('/:id', function(req: Request, res: Response) {
    res.send('created');
});

router.patch('/:id', function(req: Request, res: Response) {
    res.send('updated');
});

router.delete('/:id', function(req: Request, res: Response) {
    res.send('delete');
});

export default router;
