import React from 'react';

const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full max-w-[350px] bg-dark-400 rounded-[15px] shadow-card p-6'>
      {children}
    </div>
  );
};

export default CardLayout;
