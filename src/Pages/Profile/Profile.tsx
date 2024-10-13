import { useState, useEffect } from 'react';

type ProfileData = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  image: {
    url: string;
    alt: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
  };
  bizNumber: number;
  createdAt: string;
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    // Fetch the profile data from your API
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/profile'); // Replace with your actual API
        const data = await response.json();
        setProfileData(data); // Set the fetched data to state
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 shadow-lg rounded-lg max-w-lg">
        <h1 className="text-3xl font-bold mb-4">{profileData.title}</h1>
        <p className="text-lg">{profileData.description}</p>
        <img src={profileData.image.url} alt={profileData.image.alt} className="my-4" />
        <p>Phone: {profileData.phone}</p>
        <p>Email: {profileData.email}</p>
        <p>Website: <a href={profileData.web} target="_blank" className="text-blue-500">{profileData.web}</a></p>
      </div>
    </div>
  );
};

export default ProfilePage;
