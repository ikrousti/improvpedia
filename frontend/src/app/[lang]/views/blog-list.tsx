import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "../utils/api-helpers";

interface Article {
  id: 4;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    category: {
      data: {
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    authorsBio: {
      data: {
        attributes: {
          name: string;
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export default function PostList({
  data: articles,
  children,
}: {
  data: Article[];
  children?: React.ReactNode;
}) {
  return (
    <section className="container p-6 mx-auto">       
        {articles.map((article) => {
      const category = article.attributes.category.data?.attributes;;
          return (            
<li >
          <Link className="text-m font-semibold no-underline hover:underline "
              href={`games/${category?.slug}/${article.attributes.slug}`}
              key={article.id}  >     
    {article.attributes.title}
         </Link>
            </li>
          );
          
        })}
       
        {/* </div>  */}
      {children && children}
     </section>
  );
}
