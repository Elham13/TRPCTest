import * as bcrypt from "bcryptjs";
import { IUser } from "@root/libs/types/collections/user";
import { Document, model, models } from "mongoose";
import { Schema } from "mongoose";

interface IUserSchema extends Omit<IUser, "_id">, Document {}

const UserSchema = new Schema<IUserSchema>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "phone is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: {
        values: ["Admin"],
        message: "Please provide one of the following values:=>, Admin",
      },
      required: [true, "role is required"],
    },
  },
  { timestamps: true }
);

// Hash the password before saving it
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  });
});

const User = models.User || model<IUserSchema>("User", UserSchema);

export default User;
