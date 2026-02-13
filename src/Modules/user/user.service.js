import { UserModel } from "../../DB/Models/index.js";

export const signup = async (data) => {
  const { email, name, password } = data;
  const findUser = await UserModel.findOne({
    where: {
        email: email
    }
  })

  if (findUser) {
    throw new Error(`This Email is Already Registered`, {cause: {status: 409}})
  }

  const user = await UserModel.create({
    email: email,
    name: name,
    password: password,
  });

  return user
};

export const login = async(data) => {
    const {email, password} = data
    const user = await UserModel.findOne({
        where: {
            email: email,
            password: password
        }
    })
    if (!user) {
        throw new Error(`This Login Credentials Are Not Registered`, {cause: {status:404}})
    }

    return user
}
