import { useEffect } from 'react';

export function useDocumentTitle() {
  useEffect(() => {
    document.title = 'Peter Yastreboff';
  }, []);
}
