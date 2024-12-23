const BlogDetails = ({ post }) => {
    if (!post) return <p>Select a post to see details.</p>;

    return (
        <div className="blog-details">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default BlogDetails;
