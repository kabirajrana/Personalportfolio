
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
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
