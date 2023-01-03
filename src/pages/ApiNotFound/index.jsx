import React from 'react';
import Error from '../../components/Error';

/**
 * Component displaying the error page when the api connection failed.
 * @component
 * @example
 * return (
 *  <ApiNotFound />
 * )
 */
export default function ApiNotFound() {
  return (
    <Error title1="API" title2="non trouvée" message="La connexion avec l'API n&apos;a pas pu aboutir." />
  );
}
