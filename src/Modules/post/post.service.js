import { PostModel, CommentModel, UserModel } from "../../DB/Models/index.js";
import { sequelize } from "../../DB/db.connection.js";

export const createPost = async (data) => {
  const { title, content, userId } = data;

  const post = await PostModel.create({
    title: title,
    content: content,
    userId: userId,
  });

  return post;
};

export const deletePost = async (data, userId) => {
  
  const post = await PostModel.findByPk(data);

  if (!post) {
    throw new Error(`There Is No Post`, { cause: { status: 404 } });
  }

  if (post.userId !== userId) {
    throw new Error(`Not authorized to remove this post`, {
      cause: { status: 403 },
    });
  }
  await post.destroy();
  return post;
};

export const getAllPosts = async () => {
  const post = await PostModel.findAll({
    attributes: ["id", "title"],
    include: [
      {
        model: UserModel,
        attributes: ["id", "name"],
      },
      {
        model: CommentModel,
        attributes: ["id", "content"],
      },
    ],
  });
  return post;
};

export const getPostsCommentCount = async () => {
  const posts = await PostModel.findAll({where:{},
    attributes: [
      "id",
      "title",
      [sequelize.fn("COUNT", sequelize.col("C_id")), "commentCount"],
    ],
    include: [
      {
        model: CommentModel,
        attributes: [],
      },
    ],
    group: ["C_id"],
    order: [["id", "ASC"]],
  });

  return posts;
};
