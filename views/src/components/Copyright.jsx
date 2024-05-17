const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer footer-center p-4 bg-base-300 text-base-content mt-10'>
      <p>&copy; {currentYear} All Rights Reserved FastKart.</p>
    </div>
  );
};

export default Copyright;
