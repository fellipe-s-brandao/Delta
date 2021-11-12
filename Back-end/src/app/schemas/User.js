import mongoose from "@/database";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },

  featuredImage: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);
