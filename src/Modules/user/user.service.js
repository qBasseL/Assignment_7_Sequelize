import { UserModel } from "../../DB/Models/index.js";

export const signup = async (data) => {
  const { email, name, password } = data;
  const findUser = await UserModel.findOne({
    where: {
      email: email,
    },
  });

  if (findUser) {
    throw new Error(`This Email is Already Registered`, {
      cause: { status: 409 },
    });
  }

  const user = await UserModel.create({
    email: email,
    name: name,
    password: password,
  });

  return user;
};

export const login = async (data) => {
  const { email, password } = data;
  const user = await UserModel.findOne({
    where: {
      email: email,
      password: password,
    },
  });
  if (!user) {
    throw new Error(`This Login Credentials Are Not Registered`, {
      cause: { status: 404 },
    });
  }

  return user;
};

export const updateProfile = async (id, data) => {
  const { email, password, name } = data;
  const user = await UserModel.update(
    { email, password, name },
    {
      where: {
        id: id,
      },
    },
  );

  if (!user.length) {
    throw new Error(`Couldn't Find User`, { cause: { status: 404 } });
  }

  const updatedUser = await UserModel.findByPk(id);
  return updatedUser;
};

export const searchByEmail = async (data) => {
  //   const { email } = data;

  const user = await UserModel.findOne({
    where: {
      email: data,
    },
  });

  if (!user) {
    throw new Error(`No Email With This Credentials`, {
      cause: { status: 404 },
    });
  }

  return user;
};

export const getUser = async (data) => {
  const user = await UserModel.findByPk(data, {
    attributes: { exclude: ["role", 'password'] },
  });

  if (!user) {
    throw new Error(`This user is not found`, {cause: {status: 404}})
  }

  return user
};
