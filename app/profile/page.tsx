import React from 'react';
import UserProfile from '../components/user-profile';

export default function ProfilePage() {
  return (
    <UserProfile
      name="El viejo Gepetto"
      job="Carpintero"
      address="Maipú, Santiago"
      avatar="/images/providers/avatar.png"
      image="/images/providers/carpintero.jpeg"
    />
  );
}
