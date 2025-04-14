import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogById } from '../../lib/api';
import ReactMarkdown from 'react-markdown'; // For rendering Markdown content
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown support
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Blog } from '../../types/Blogs';

const BlogPostsDetails: React.FC = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const { documentId } = useParams<{ documentId: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlog = async () => {
      try {
        if (!documentId) {
          throw new Error('Blog documentId is missing');
        }
        const data = await fetchBlogById(locale, documentId);
        setBlog(data.data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, [locale, documentId]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!blog) return <div className="text-center mt-8">Blog not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {blog.coverImage?.[0]?.url && (
          <img
            src={blog.coverImage[0].url}
            alt={blog.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
          />
        )}
        <div className="p-4 sm:p-8 md:p-16 lg:p-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-4">{blog.title}</h2>
          <div className="text-gray-700 mb-4">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ ...props }) => (
                  <img
                    {...props}
                    className="mx-auto my-4 max-w-full h-auto rounded-lg shadow-md"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                ),
                ul: ({ ...props }) => <ul {...props} className="list-disc list-inside mb-4 pl-6" />,
                ol: ({ ...props }) => <ol {...props} className="list-decimal list-inside mb-4 pl-6" />,
                li: ({ ...props }) => <li {...props} className="mb-2 pl-2" />,
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate('/blog')}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-500 w-full sm:w-auto"
      >
        Back to blogs
      </button>
    </div>
  );
};

export default BlogPostsDetails;
