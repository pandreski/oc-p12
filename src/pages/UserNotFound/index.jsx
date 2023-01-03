import React from 'react';
import Error from '../../components/Error';

/**
 * Component displaying the error page for an unknown user.
 * @component
 * @example
 * return (
 *  <UserNotFound />
 * )
 */
export default function UserNotFound() {
  return (
    <Error title1="Utilisateur" title2="non trouvé" message="L&apos;utilisateur que vous cherchez n&apos;existe pas." />
  );
}
