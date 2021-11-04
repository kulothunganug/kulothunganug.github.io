import { useEffect } from 'react';

const useTitle = title => {
  useEffect(() => {
    title && (document.title = title);
  }, [title]);
};

export default useTitle;
