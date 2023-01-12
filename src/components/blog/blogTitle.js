const BlogTitle = (props) => {
  return (
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-info sm:text-4xl md:mx-auto">
        {props.title}
      </h2>
      <p className="text-base text-info md:text-lg">{props.subTitle}</p>
    </div>
  );
};
export default BlogTitle;
