import mongoose from "mongoose";

const connectDb = async () => {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error("MongoDB connection string is not defined.");
    process.exit(1);
  }

  try {
    const connect = await mongoose.connect(connectionString);
    console.log(
      `Database connected: ${connect.connection.host} - ${connect.connection.name}`
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDb;
