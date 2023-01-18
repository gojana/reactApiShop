

const FooterMedia = (props) => {
  return (
    <div>
      <span className="footer-title">{props.title}</span>
      <div className="grid grid-flow-col gap-4">
        <a
          className="link hover:-translate-y-1 hover:scale-150  duration-300"
          href={`${props.linkTo1}`}
        >
          {props.comp1}
        </a>
        <a
          className="link hover:-translate-y-1 hover:scale-150  duration-300"
          href={`${props.linkTo2}`}
        >
          {props.comp2}
        </a>
        <a
          className="link hover:-translate-y-1 hover:scale-150  duration-300"
          href={`${props.linkTo3}`}
        >
          {props.comp3}
        </a>
        <a
          className="link hover:-translate-y-1 hover:scale-150  duration-300"
          href={`${props.linkTo4}`}
        >
          {props.comp4}
        </a>
      </div>
    </div>
  );
};
export default FooterMedia;
