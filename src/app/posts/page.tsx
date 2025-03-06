import { sanityClient } from "@/sanity/sanityClient";

async function getPosts() {
  const query = `*[_type == "post"]{ _id, title, content }`;
  return sanityClient.fetch(query);
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="mt-4 space-y-4">
        {posts.map((post: { _id: string; title: string; content: string }) => (
          <div key={post._id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

