import SkillBlock from "./SkillsBlock";

const MyStack = () => {
  return (
    <div className='md:px-8 py-5 w-5/8 flex justify-center flex-col md:flex-row'>
      <div className='p-3 bg-white bg-opacity-40 rounded-[30px]'>
        <div className='rounded-3xl w-80 bg-white p-3 h-full flex flex-col justify-center drop-shadow-sm'>
          <h2 className='text-orange-300 text-3xl font-semibold text-center m-2'>
            My Stack
          </h2>
          <p className=''>
            A few of the technologies and softwares I work with. These are tools
            I'm familiar with.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-5 px-2 md:px-10 pt-10 md:pt-0 gap-5'>
        <SkillBlock hoverBg='blue.600' text='Javascript' color='yellow' />
        <SkillBlock hoverBg='blue.600' text='Typescript' color='blue' />
        <SkillBlock hoverBg='blue.600' text='NodeJs' color='green' />
        <SkillBlock hoverBg='blue.600' text='React' color='skyblue' />
        <SkillBlock hoverBg='blue.600' text='NextJs' color='black' />
        <SkillBlock hoverBg='blue.600' text='Redux Tk' color='purple' />
        <SkillBlock hoverBg='blue.600' text='Firebase' color='orange' />
        <SkillBlock hoverBg='blue.600' text='Express' color='red' />
        <SkillBlock hoverBg='blue.600' text='GraphQL' color='crimson' />
        <SkillBlock hoverBg='blue.600' text='MongoDB' color='lightgreen' />
      </div>
    </div>
  );
};

export default MyStack;
