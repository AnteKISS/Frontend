import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import webpack, { Configuration } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack/webpack.dev';

const app = express();
const port = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compiler = webpack(webpackConfig as Configuration);
app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
}));

app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader("Content-Security-Policy", "frame-ancestors 'self' http://localhost:8180");
	next();
});

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('*', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
