
import React, { useState } from 'react';
import { MessageCircle, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  postId: number;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Sarah Johnson",
      content: "Great article! This really helped me understand the differences between these frameworks.",
      timestamp: "2024-01-20 14:30"
    },
    {
      id: 2,
      author: "Mike Chen",
      content: "Thanks for the detailed comparison. I'm leaning towards React Native for my next project.",
      timestamp: "2024-01-21 09:15"
    }
  ]);
  
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !authorName.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both your name and comment.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const comment: Comment = {
        id: comments.length + 1,
        author: authorName.trim(),
        content: newComment.trim(),
        timestamp: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      
      setComments([...comments, comment]);
      setNewComment('');
      setAuthorName('');
      setIsSubmitting(false);
      
      toast({
        title: "Comment posted!",
        description: "Your comment has been added successfully.",
      });
    }, 1000);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass p-8 rounded-xl">
        <div className="flex items-center space-x-3 mb-8">
          <MessageCircle className="w-6 h-6 text-cyan-400" />
          <h3 className="text-2xl font-bold gradient-text">
            Comments ({comments.length})
          </h3>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="mb-8 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[120px] bg-gray-800/50 border-gray-700 focus:border-cyan-400 text-white placeholder-gray-400"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition-transform"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </Button>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-white">{comment.author}</h4>
                      <div className="flex items-center space-x-1 text-sm text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>{formatTimestamp(comment.timestamp)}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
