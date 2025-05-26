
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, this would fetch from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React and TypeScript",
      slug: "modern-web-apps-react-typescript",
      excerpt: "Learn how to build scalable and maintainable web applications using React and TypeScript. Discover best practices and advanced patterns.",
      content: `
        <h2>Introduction</h2>
        <p>React and TypeScript have become the go-to combination for building modern web applications. This powerful duo offers the flexibility of React with the type safety and developer experience of TypeScript.</p>
        
        <h2>Why React and TypeScript?</h2>
        <p>The combination of React and TypeScript provides several benefits:</p>
        <ul>
          <li><strong>Type Safety:</strong> Catch errors at compile time rather than runtime</li>
          <li><strong>Better IDE Support:</strong> Enhanced autocomplete, refactoring, and navigation</li>
          <li><strong>Improved Code Quality:</strong> Self-documenting code with clear interfaces</li>
          <li><strong>Easier Refactoring:</strong> Confidence when making changes to your codebase</li>
        </ul>
        
        <h2>Setting Up Your Environment</h2>
        <p>To get started with React and TypeScript, you can use Vite for a fast development experience:</p>
        <pre><code>npm create vite@latest my-app -- --template react-ts</code></pre>
        
        <h2>Best Practices</h2>
        <h3>1. Define Clear Interfaces</h3>
        <p>Always define interfaces for your props and state:</p>
        <pre><code>interface UserProps {
  name: string;
  email: string;
  isActive: boolean;
}</code></pre>
        
        <h3>2. Use Generic Components</h3>
        <p>Create reusable components with TypeScript generics for better type safety.</p>
        
        <h3>3. Leverage Union Types</h3>
        <p>Use union types for props that can have multiple valid values.</p>
        
        <h2>Conclusion</h2>
        <p>React and TypeScript together create a powerful development experience that scales well with your application. Start incorporating these practices in your next project!</p>
      `,
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
      content: `
        <h2>Introduction</h2>
        <p>Cross-platform mobile development has evolved significantly, with React Native and Flutter leading the charge. Both frameworks promise to deliver native-like performance while allowing developers to write code once and deploy everywhere.</p>
        
        <h2>React Native Overview</h2>
        <p>React Native, developed by Facebook, allows developers to use React and JavaScript to build mobile applications. It bridges JavaScript and native platform APIs.</p>
        
        <h3>Pros of React Native:</h3>
        <ul>
          <li>Familiar for React developers</li>
          <li>Large community and ecosystem</li>
          <li>Hot reloading for faster development</li>
          <li>Backed by Meta (Facebook)</li>
        </ul>
        
        <h3>Cons of React Native:</h3>
        <ul>
          <li>Performance limitations for complex animations</li>
          <li>Platform-specific code sometimes required</li>
          <li>Bridge-based architecture can cause bottlenecks</li>
        </ul>
        
        <h2>Flutter Overview</h2>
        <p>Flutter, created by Google, uses Dart programming language and provides its own rendering engine, which draws directly to the screen.</p>
        
        <h3>Pros of Flutter:</h3>
        <ul>
          <li>Excellent performance with compiled code</li>
          <li>Consistent UI across platforms</li>
          <li>Rich set of pre-built widgets</li>
          <li>Growing rapidly with Google's support</li>
        </ul>
        
        <h3>Cons of Flutter:</h3>
        <ul>
          <li>Dart language learning curve</li>
          <li>Larger app size</li>
          <li>Newer ecosystem compared to React Native</li>
        </ul>
        
        <h2>Which Should You Choose?</h2>
        <p>The choice between React Native and Flutter depends on several factors:</p>
        
        <h3>Choose React Native if:</h3>
        <ul>
          <li>Your team has React/JavaScript experience</li>
          <li>You need to leverage existing web code</li>
          <li>You want access to a mature ecosystem</li>
        </ul>
        
        <h3>Choose Flutter if:</h3>
        <ul>
          <li>Performance is critical for your app</li>
          <li>You want pixel-perfect UI consistency</li>
          <li>You're building a new app from scratch</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Both React Native and Flutter are excellent choices for cross-platform development. Consider your team's expertise, project requirements, and long-term maintenance when making your decision.</p>
      `,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Mobile Development",
      author: "Kabiraj",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      tags: ["React Native", "Flutter", "Mobile Development"]
    }
  ];

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
