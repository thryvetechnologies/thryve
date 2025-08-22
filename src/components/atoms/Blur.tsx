type Props = {
  mainClassName: string;
  blurStrength: string;
  blurSize: string;
};

const Blur = ({ mainClassName, blurStrength, blurSize }: Props) => {
  return (
    <div className={`absolute pointer-events-none ${mainClassName}`}>
      <div
        className="bg-primary"
        style={{
          filter: `blur(${blurStrength}px)`,
          width: `${blurSize}px`,
          height: `${blurSize}px`,
        }}
      />
    </div>
  );
};

export default Blur;
