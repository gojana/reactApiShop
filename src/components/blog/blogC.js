import BlogTitle from './blogTitle';
import BlogElemC from './blogElemC';


const BlogC=()=> {
  return (
    <div className="px-4 mb-20 -mt-40 mx-auto  sm:max-w-xl sm:pt-80 sm:pb-10 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "
   >
      <BlogTitle
        title={'Del Campo a su Mesa'}
        subTitle={
          'Blog dedicado a darle la informacion necesaria para que obtenga el mejor rendimiento con sus cultivos'
        }
      />
      <BlogElemC />
    </div>
  );
}
export default BlogC;
