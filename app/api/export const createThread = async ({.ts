export const createThread = async ({
  text,
  author,
  communityId,
  path,
}: Params) => {
  try {
    connectToDB();
    const communityIdObject = await Community.findOne(
      { id: communityId },
      { _id: 1 }
    );

    const createThread = await Thread.create({
      text,
      author,
      community: communityIdObject,
    });
    // console.log("author", author);

    // Update UserModel thread and add it User Table
    await User.findByIdAndUpdate(author, {
      $push: { threads: createThread._id },
    });
    if (communityIdObject) {
      await Community.findByIdAndUpdate(communityIdObject, {
        $push: { threads: createThread._id },
      });
    }
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error while Creating threads ${error?.message}`);
  }
};