
export const getSinglePostComments = async (id)=>{
	const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

	if(!post.ok)  throw new Error("This is error for Single post comments!!")

	return post.json();
}