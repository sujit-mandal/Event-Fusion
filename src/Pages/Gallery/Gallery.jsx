import PhotoAlbum from "react-photo-album";
const photos = [
  { src: "https://i.ibb.co/TbRrZ7X/bg-1-1.jpg", width: 1200, height: 800 },
  { src: "https://i.ibb.co/NsxHx3T/bg-2-1.jpg", width: 1400, height: 700 },
  { src: "https://i.ibb.co/yR4cp09/wedding.jpg", width: 1000, height: 500 },
  { src: "https://i.ibb.co/cJnFNcq/retirement.jpg", width: 1800, height: 1400 },
  { src: "https://i.ibb.co/WpRWtGy/bg-3-1.jpg", width: 400, height: 600 },
  { src: "https://i.ibb.co/dcy9hSb/birthday.jpg", width: 1300, height: 1000 },
  { src: "https://i.ibb.co/hdnpD7Q/baby-shower.jpg", width: 600, height: 900 },
  { src: "https://i.ibb.co/TK0sjvN/engagement.jpg", width: 1000, height: 700 },
  { src: "https://i.ibb.co/h1PFBc9/anniversary.jpg", width: 800, height: 900 },
  { src: "https://i.ibb.co/C28LLdd/ca-4.jpg", width: 800, height: 1200 },
  { src: "https://i.ibb.co/pWdY449/ca-1.jpg", width: 700, height: 1000 },
  { src: "https://i.ibb.co/3W06X0D/ca-2.jpg", width: 1500, height: 1200 },
  {
    src: "https://i.ibb.co/ZW6bdnB/adrian-ordonez-Xo-Da-X17-KFt-A-unsplash.jpg",
    width: 900,
    height: 1000,
  },
  {
    src: "https://i.ibb.co/P4FjNgK/brayden-prato-r5-Ze1w-Y1hc-unsplash.jpg",
    width: 1800,
    height: 1200,
  },
  {
    src: "https://i.ibb.co/Tmd9sp3/danie-franco-7-Xq-L-DVu-BMw-unsplash.jpg",
    width: 800,
    height: 600,
  },
];

const Gallery = () => {
  return (
    <div className="App">
      <h1 className="text-center text-5xl my-10 font-bold">
        Fusion <span className="text-[#FD60A2]">Gallery</span>
      </h1>

      <div>
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </div>
  );
};

export default Gallery;
