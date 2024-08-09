
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() {
   const name = "Silki";
  const photos = [
    { url: "/files/images/i1.jpeg" },
    { url: "/files/images/i2.jpeg" },
    { url: "/files/images/i3.jpeg" },
    { url: "/files/images/i4.jpeg" },
    { url: "/files/images/i5.jpeg" },
    { url: "/files/images/i6.jpeg" },
    { url: "/files/images/i7.jpeg" },
    { url: "/files/images/i8.jpeg" },
    { url: "/files/images/i9.jpeg" },
    { url: "/files/images/i10.jpeg" },
    { url: "/files/images/i11.jpeg" },
    { url: "/files/images/i12.jpeg" },
    { url: "/files/images/i13.jpeg" },
    { url: "/files/images/i14.jpeg" },
    { url: "/files/images/i15.jpeg" },
    { url: "/files/images/i16.jpeg" },
    { url: "/files/images/i17.jpeg" },
    { url: "/files/images/i18.jpeg" },
    { url: "/files/images/i19.jpeg" },
    { url: "/files/images/i19i.jpeg" },
    { url: "/files/images/i20.jpeg" },
    { url: "/files/images/i21.jpeg" },
    { url: "/files/images/i22.jpeg" },
    { url: "/files/images/i23.jpeg" },
    { url: "/files/images/i24.jpeg" },
    { url: "/files/images/i25.jpeg" },
    { url: "/files/images/i26.jpeg" },
    { url: "/files/images/i27.jpeg" },
    { url: "/files/images/i28.jpeg" },
    { url: "/files/images/i29.jpeg" },
    { url: "/files/images/i30.jpeg" },
    { url: "/files/images/i31.jpeg" },
    { url: "/files/images/i32.jpeg" },
    { url: "/files/images/i33.jpeg" },
    { url: "/files/images/i34.jpeg" },
    { url: "/files/images/i35.jpeg" },
    { url: "/files/images/i36.jpeg" },
    { url: "/files/images/i37.jpeg" },
    { url: "/files/images/i38.jpeg" },
    { url: "/files/images/i39.jpeg" },
    { url: "/files/images/i40.jpeg" },
    { url: "/files/images/i41.jpeg" },
    { url: "/files/images/i42.jpeg" },
    { url: "/files/images/i43.jpeg" },
    { url: "/files/images/i44.jpeg" },

  ];
  const videoUrl = "/files/videos/v1.mp4";
  const songUrl="/files/audio/song.mp3";
  return (
    <div className="App font-serif">
    <Body name={name} photos={photos} videoUrl={videoUrl} songUrl={songUrl}/>
    <Footer/>
    </div>
  );
}

export default App;
