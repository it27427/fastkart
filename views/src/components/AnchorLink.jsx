const AnchorLink = ({ href, children }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
};

export default AnchorLink;