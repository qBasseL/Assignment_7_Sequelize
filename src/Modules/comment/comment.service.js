import { CommentModel } from "../../DB/Models/index.js";

export const allComments = async (data) => {
  const { comments } = data;

  if (!comments || !Array.isArray(comments) || comments.length === 0) {
    const error = new Error("Comments array is required");
    error.cause = { status: 400 };
    throw error;
  }

  const createdComments = await CommentModel.bulkCreate(comments);
  return createdComments;
};

export const updateComment = async (data, id) => {
  const { content } = data;

  const comment = await CommentModel.update(
    { content: content },
    {
      where: {
        id: id,
      },
    },
  );

  if (!comment) {
    throw new Error(`Couldn't Find This Error`, { cause: { status: 404 } });
  }
  return comment;
};
