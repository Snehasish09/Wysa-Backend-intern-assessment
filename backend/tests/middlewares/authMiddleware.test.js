const { isLogin } = require('../../middleware/auth');
const jwt = require('jsonwebtoken');

describe('Auth Middleware', () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            headers: {
                authorization: 'Bearer someInvalidToken',
            },
        };

        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
            json: jest.fn(),
        };

        next = jest.fn();
    });

    it('should return 400 if token is invalid', () => {
        isLogin(req, res, next);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({
            success: 0,
            message: expect.any(String),
        });
    });

    it('should call next() if token is valid', () => {
        const validToken = jwt.sign({ id: 'userId' }, "c6d2ba79656f63318cabfc5f41b050705fdccea2d81f8bca185da5d735dba247");
        req.headers.authorization = `Bearer ${validToken}`;

        isLogin(req, res, next);

        expect(next).toHaveBeenCalled();
    });
});