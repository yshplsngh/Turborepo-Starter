import express, { Express, Request, Response } from 'express';

export const createServer = (): Express => {
    const app: Express = express();

    app.all('/ping', (req: Request, res: Response) => {
        res.status(200).json({
            RunTime: process.uptime(),
        });
    });

    return app;
};
