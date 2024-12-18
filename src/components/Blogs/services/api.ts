export async function fetchBlogPosts() {
  try {
    const response = await fetch('https://blog.shockfit.hr/api/records');
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}