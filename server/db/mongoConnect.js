const mongoose = require("mongoose");
const { SECRET } = require("../config/secret");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(SECRET.MONGO_CONNECTION);
  // console.log("mongo connect idf8 local");
}
