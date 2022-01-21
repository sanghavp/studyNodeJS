const mongoose = require("mongoose");
const config = require("config");
const db = config.get('mongoURI');

const connectBD = async () => {
   try {
      await mongoose.connect(db, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });
   } catch (erorr) {
      console.log(`Ket noi that bai: ${erorr.message}`);
      process.exit(1);
   }
}
module.exports = connectBD;