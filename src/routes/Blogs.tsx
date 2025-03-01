import { useState, useEffect } from 'react';
import { db } from '../auth/firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { BlogPost } from '../types/Blogs';

// Rating Component
const Rating: React.FC<{ rating: number; onRate: (value: number) => void }> = ({ rating, onRate }) => (
  <div className="mt-8">
    <h3 className="text-2xl font-bold text-blue-400 mb-4">Rate this Blog</h3>
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => onRate(value)}
          className={`text-2xl ${value <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
        >
          ★
        </button>
      ))}
    </div>
    <p className="text-gray-300 mt-2">Your rating: {rating}/5</p>
  </div>
);

// Comments Component
const Comments: React.FC<{
  comments: string[];
  comment: string;
  onCommentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCommentSubmit: () => void;
}> = ({ comments, comment, onCommentChange, onCommentSubmit }) => (
  <div className="mt-8">
    <h3 className="text-2xl font-bold text-blue-400 mb-4">Comments</h3>
    <textarea
      value={comment}
      onChange={onCommentChange}
      placeholder="Add a comment..."
      className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400"
      rows={3}
    />
    <button
      onClick={onCommentSubmit}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Submit Comment
    </button>
    <div className="mt-4 space-y-4">
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300">{comment}</p>
        </div>
      ))}
    </div>
  </div>
);

// BlogPostForm Component
const BlogPostForm: React.FC<{
  bloggerName: string;
  newBlogPost: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPostChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}> = ({ bloggerName, newBlogPost, onNameChange, onPostChange, onSubmit }) => (
  <div className="mt-8">
    <h3 className="text-2xl font-bold text-blue-400 mb-4">Create Your Own Blog Post</h3>
    <input
      type="text"
      value={bloggerName}
      onChange={onNameChange}
      placeholder="Your Name"
      className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 mb-4"
    />
    <textarea
      value={newBlogPost}
      onChange={onPostChange}
      placeholder="Write your blog post here..."
      className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400"
      rows={5}
    />
    <button
      onClick={onSubmit}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Submit Blog Post
    </button>
  </div>
);

const Blogs: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [newBlogPost, setNewBlogPost] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [bloggerName, setBloggerName] = useState('');

  // Fetch blog posts from Firestore on component mount
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blogPosts'), (querySnapshot) => {
      const posts: BlogPost[] = [];
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() } as BlogPost);
      });
      setBlogPosts(posts);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  // Handle rating selection
  const handleRating = (value: number) => {
    setRating(value);
  };

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  // Handle new blog post submission
  const handleBlogPostSubmit = async () => {
    if (newBlogPost.trim() && bloggerName.trim()) {
      const newPost = {
        name: bloggerName,
        content: newBlogPost,
        timestamp: new Date().toLocaleString(),
      };

      // Add the new blog post to Firestore
      const docRef = await addDoc(collection(db, 'blogPosts'), newPost);

      // Update the local state with the new blog post
      setBlogPosts([...blogPosts, { id: docRef.id, ...newPost }]);
      setNewBlogPost('');
      setBloggerName('');
    }
  };

  return (
    <div className="bg-gray-900 text-white py-8 px-4 sm:px-8 lg:px-40">
      {/* Blog Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-8 text-center">
        The Ultimate Guide to Software Test Automation
      </h1>

      {/* Blog Content */}
      <div className="space-y-6 text-gray-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Introduction</h2>
        <p>
          Software test automation has become a fundamental practice in modern software development, enabling teams to
          enhance efficiency, ensure quality, and accelerate release cycles. As applications grow in complexity, manual
          testing alone is no longer sufficient to maintain reliability. This guide delves into software test
          automation, its benefits, challenges, tools, and best practices to help you build a robust automated testing
          strategy.
        </p>

        {/* Add other sections similarly... */}

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Conclusion</h2>
        <p>
          Software test automation is a game-changer in modern software development, offering speed, efficiency, and
          improved quality assurance. By choosing the right tools, following best practices, and continuously evolving
          your testing strategy, you can maximize the benefits of automation. Investing in automation today will lead to
          more reliable, scalable, and high-performing applications in the future.
        </p>
      </div>

      {/* Rating Section */}
      <Rating rating={rating} onRate={handleRating} />

      {/* Comments Section */}
      <Comments
        comments={comments}
        comment={comment}
        onCommentChange={(e) => setComment(e.target.value)}
        onCommentSubmit={handleCommentSubmit}
      />

      {/* Create Your Own Blog Section */}
      <BlogPostForm
        bloggerName={bloggerName}
        newBlogPost={newBlogPost}
        onNameChange={(e) => setBloggerName(e.target.value)}
        onPostChange={(e) => setNewBlogPost(e.target.value)}
        onSubmit={handleBlogPostSubmit}
      />

      <div className="mt-4 space-y-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-blue-400">{post.name}</h4>
            <p className="text-gray-400 text-sm">{post.timestamp}</p>
            <p className="text-gray-300 mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
