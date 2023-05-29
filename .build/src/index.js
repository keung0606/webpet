var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_http = __toESM(require("http"));
var import_body_parser = __toESM(require("body-parser"));
var import_cookie_parser = __toESM(require("cookie-parser"));
var import_compression = __toESM(require("compression"));
var import_cors = __toESM(require("cors"));
var import_mongoose = __toESM(require("mongoose"));
const app = (0, import_express.default)();
app.use((0, import_cors.default)({
  credentials: true
}));
app.use((0, import_compression.default)());
app.use((0, import_cookie_parser.default)());
app.use(import_body_parser.default.json());
const server = import_http.default.createServer(app);
server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});
const MONGO_URL = "mongodb+srv://keung123654:keung123654@cluster0.x8ugfjo.mongodb.net/?retryWrites=true&w=majority";
import_mongoose.default.Promise = Promise;
import_mongoose.default.connect(MONGO_URL);
import_mongoose.default.connection.on("error", (error) => console.log(error));
//# sourceMappingURL=index.js.map
