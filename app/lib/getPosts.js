
export const getPost = async ()=>{
	const post = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

	if(!post.ok)  throw new Error("This is error for post!!")

	return post.json();
}

export const getSinglePost = async (id)=>{
	const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

	if(!post.ok)  throw new Error("This is error for Single post!!")

	return post.json();
}