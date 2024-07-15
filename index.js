import data from "./index.json";

await Bun.write("./index.min.json", JSON.stringify(data, 0, 0))
