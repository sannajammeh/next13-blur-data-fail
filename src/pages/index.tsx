import Image from "next/image";

import photo from "public/photo.png";

const Home = () => {
  return (
    <div>
      <Image src={photo} placeholder="blur" alt="photo" />
    </div>
  );
};

export default Home;
