
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
            Insights, tutorials, and thoughts on modern web development, mobile apps, and technology trends.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-6 items-start xl:items-center">
            {/* Search Bar */}
            <div className="relative w-full xl:w-96 xl:flex-shrink-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full xl:flex-1">
              <div className="flex flex-wrap items-center gap-3 justify-start xl:justify-end">
                <span className="text-sm text-gray-400 font-medium hidden lg:block mr-2">Categories:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 mb-16">
        <div className="max-w-6xl mx-auto">
          {currentPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <Card key={post.id} className="bg-gray-800/30 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === pageNumber
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Blog;
