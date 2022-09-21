import Header from '../header/Header';

const LayoutInner = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayoutInner;
