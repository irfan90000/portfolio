import Image from "next/image";
import Link from "next/link";
import { CommentIcon } from "../Icons";
import { posts } from "../data/content";

export default function Blog() {
  return (
    <section id="blogs" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Blog
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Check out my recent blog posts where I share insights on Laravel
            development, AI integration, and the latest industry trends.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl overflow-hidden border-1 border-gray-300 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-200/50 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="flex items-center gap-2 text-sm text-gray-400">
                  {post.date}
                  <span className="text-gray-300">/</span>
                  <CommentIcon size={12} />
                  {post.comments} Comments
                </p>
                <h3 className="mt-2 text-lg font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#fbbe07] transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
