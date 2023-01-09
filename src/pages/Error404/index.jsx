import React from 'react';
import Error from '../../components/Error';

/**
 * Component displaying the 404 error page.
 * @component
 * @example
 * return (
 *  <Error404 />
 * )
 */
export default function Error404() {
  return (
    <Error title1="Page" title2="non trouvée" message="La page que vous cherchez n'existe pas." />
  );
}
