import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Loader from '../../components/common/Loader';
import BlogDetail from '../../components/blog/BlogDetail';
import BlogComments from '../../components/blog/BlogComments';
import { blogService } from '../../services/blogService';
import { toast } from 'react-toastify';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await blogService.getBlogBySlug(slug);
      setBlog(response.data);
    } catch (error) {
      toast.error('Failed to load blog');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!blog) {
    return (
      <div className="container section-padding">
        <div className="alert alert-warning">Blog not found</div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={blog.metaTitle || blog.title}
        description={blog.metaDescription || blog.summary}
        keywords={blog.category?.name}
      />
      
      <section className="blog-detail-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <BlogDetail blog={blog} />
              <div className="mt-5">
                <BlogComments blogSlug={slug} comments={blog.comments || []} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;
