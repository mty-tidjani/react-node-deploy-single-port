import * as express from "express";
import * as path from "path";
import { Application, Response, Request } from "express";

const app: Application = express();

const PORT = process.env.PORT || 4000;

app.get("/api/", function(req: Request, res: Response) {
  // Deal all API routes seperatly from client routes
  res.send("Hello World");
});

app.use(express.static(path.join(__dirname, '../clientbuild')));

app.get("*", function(req: Request, res: Response) {
  return res.sendFile(path.resolve(__dirname, '../clientbuild', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});