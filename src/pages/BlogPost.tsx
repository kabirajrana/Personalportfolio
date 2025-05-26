
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <article className="pt-32 pb-16">
        {/* Back Button */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 mb-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Article Header */}
        <header className="px-4 sm:px-6 md:px-12 lg:px-24 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  K
                </div>
                <span className="text-white">{post.author}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert prose-cyan max-w-none
                prose-headings:gradient-text prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-gray-300 prose-li:mb-2
                prose-strong:text-white prose-strong:font-semibold
                prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-cyan-400
                prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 mb-16">
          <CommentSection postId={post.id} />
        </div>

        {/* Share Section */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Enjoyed this article?
              </h3>
              <p className="text-gray-400 mb-6">
                Share it with your network and follow me for more insights on web development and technology.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
              >
                <span>Read More Articles</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
