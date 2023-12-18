import React from 'react';
import UserProfile from '../components/user-profile';

export default function UserProfileView() {
  return (
          <UserProfile 
          name="El viejo Gepetto"
          job="Carpintero"
          address="Maipú, Santiago"
          image="/images/providers/carpintero.jpeg"
        />
  );
};