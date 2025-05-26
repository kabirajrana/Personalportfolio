
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React and TypeScript",
      slug: "modern-web-apps-react-typescript",
      excerpt: "Learn how to build scalable and maintainable web applications using React and TypeScript. Discover best practices and advanced patterns.",
      content: "Full content here...",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Web Development",
      author: "Kabiraj",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Web Development"]
    },
    {
      id: 2,
      title: "The Future of Mobile Development: React Native vs Flutter",
      slug: "mobile-development-react-native-flutter",
      excerpt: "Compare React Native and Flutter for cross-platform mobile development. Which one should you choose for your next project?",
      content: "Full content here...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Mobile Development",
      author: "Kabiraj",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      tags: ["React Native", "Flutter", "Mobile Development"]
    },
    {
      id: 3,
      title: "Designing User-Centered Interfaces: A Complete Guide",
      slug: "user-centered-interface-design-guide",
      excerpt: "Master the principles of user-centered design and create interfaces that users love. From research to prototyping.",
      content: "Full content here...",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "UI/UX Design",
      author: "Kabiraj",
      publishDate: "2024-01-05",
      readTime: "10 min read",
      tags: ["UI/UX", "Design", "User Experience"]
    },
    {
      id: 4,
      title: "Scaling Node.js Applications: Performance Best Practices",
      slug: "scaling-nodejs-performance-best-practices",
      excerpt: "Learn how to optimize and scale your Node.js applications for high performance and reliability in production environments.",
      content: "Full content here...",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Backend Development",
      author: "Kabiraj",
      publishDate: "2024-01-01",
      readTime: "15 min read",
      tags: ["Node.js", "Performance", "Backend"]
    },
    {
      id: 5,
      title: "Introduction to Cloud Computing with AWS",
      slug: "cloud-computing-aws-introduction",
      excerpt: "Get started with Amazon Web Services and learn the fundamentals of cloud computing for modern web applications.",
      content: "Full content here...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Cloud Computing",
      author: "Kabiraj",
      publishDate: "2023-12-28",
      readTime: "11 min read",
      tags: ["AWS", "Cloud Computing", "DevOps"]
    },
    {
      id: 6,
      title: "JavaScript ES2024: New Features and Updates",
      slug: "javascript-es2024-new-features",
      excerpt: "Explore the latest JavaScript features and improvements in ES2024. Stay up-to-date with the evolving language.",
      content: "Full content here...",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Web Development",
      author: "Kabiraj",
      publishDate: "2023-12-25",
      readTime: "7 min read",
      tags: ["JavaScript", "ES2024", "Programming"]
    }
  ];

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
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
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
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
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
