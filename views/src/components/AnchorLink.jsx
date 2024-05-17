const AnchorLink = ({
  href,
  children,
  className,
  dataTooltipId,
  dataTooltipContent,
}) => {
  return (
    <a
      href={href}
      className={className}
      target='_blank'
      rel='noopener noreferrer'
      data-tooltip-id={dataTooltipId}
      data-tooltip-content={dataTooltipContent}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
