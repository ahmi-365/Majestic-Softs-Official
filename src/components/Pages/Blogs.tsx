import React, { useState, useEffect } from "react";

interface Blog {
  name: string;
  title: string;
  slug: string;
  meta_title: string;
  content: string;
  created_at: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://blog.shockfit.hr/api/records");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const result = await response.json();
        setBlogs(Array.isArray(result.data) ? result.data : []);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs available at the moment.</p>
      ) : (
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr" }}>
          {blogs.map((blog, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={`https://blog.shockfit.hr/storage/${blog.image}`}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <h2>{blog.title}</h2>
              <p><strong>Author:</strong> {blog.name}</p>
              <p>{blog.content}</p>
              <small>
                <strong>Published on:</strong>{" "}
                {new Date(blog.created_at).toLocaleDateString()}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
