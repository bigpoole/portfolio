const SkillBlock = ({
  text,
  color,
  hoverBg,
  textColor,
}: {
  text: string;
  color: string;
  hoverBg: string;
  textColor?: string;
}) => {
  return (
    <div>
      <div className='bg-white bg-opacity-40 p-2 rounded-3xl md:rounded-[30px]'>
        <div className='py-4 md:p-3 bg-white rounded-2xl md:rounded-3xl drop-shadow-sm'>
          <p
            className={`text-center whitespace-nowrap text-base md:text-xl`}
            style={{ color }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillBlock;
