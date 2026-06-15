import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `Peter Yastreboff - ${title}`;
  }, [title]);
}
