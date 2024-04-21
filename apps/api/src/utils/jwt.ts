import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export const generateToken = async (data: any) => {
  try {
    if (JWT_SECRET) {
      const token = await jwt.sign(data, JWT_SECRET, {
        expiresIn: "1h",
      });
      return token;
    } else throw new Error("No JWT_SECRET found");
  } catch (error: any) {
    throw new Error(error);
  }
};
