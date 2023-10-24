const Container = ({ children, className }) => {
  return (
    <section className={`${className} mx-auto w-[90%]`}>{children}</section>
  );
};

export default Container;
