const DefaultLayout = ({ children }) => {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className='container'>{children}</div>
    </main>
  );
};

export default DefaultLayout;
