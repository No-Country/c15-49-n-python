import React from 'react';
import UserProfile from '../components/user-profile'


export default function Profile() {
  return (
    
  <section id="main__content" className="mx-auto max-w-7xl mt-4">

<UserProfile 
  name="El viejo Gepetto"
  job="Carpintero"
  address="Maipú, Santiago"
  avatar='/images/providers/avatar.png'
  image="/images/providers/carpintero.jpeg"
/>
  </section>
  )
}

