import PropTypes from "prop-types";

const BentoCard = ({ src, title, descripton }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        autoPlay
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {descripton && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{descripton}</p>
          )}
        </div>
      </div>
    </div>
  );
};

BentoCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descripton: PropTypes.string.isRequired,
};

export default BentoCard;
