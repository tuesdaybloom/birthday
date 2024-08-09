import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { ReactTyped } from "react-typed"; // Updated import statement
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import "./fire.css";
import PhotoSlider from "./PhotoSlider";

const BirthdayWish = ({ name, photos, videoUrl, songUrl }) => {
  const [width, height] = useWindowSize();
  const [audio, setAudio] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [isBirthday, setIsBirthday] = useState(false);
  const [showSecondsOnly, setShowSecondsOnly] = useState(false);

  useEffect(() => {
    if (isBirthday && songUrl) {
      const audio = new Audio(songUrl);
      audio.play();
      setAudio(audio);

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [isBirthday, songUrl]);

  useEffect(() => {
    const countdownDate = new Date("2024-08-10T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        if (!isBirthday) {
          setIsBirthday(true); // Set birthday status only if it's not already set
        }
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        if (distance <= 10000) {
          setShowSecondsOnly(true);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isBirthday]);

  useEffect(() => {
    if (isBirthday) {
      window.scrollTo(0, 0); // Scroll to top when it's the birthday section
    }
  }, [isBirthday]);

  return (
    <div className="bg-blue-100 flex flex-col items-center px-3 sm:px-6 lg:px-8 relative">
      <div>
        {isBirthday ? (
          <div className="h-screen flex flex-col items-center justify-center">
            <Confetti width={width} height={height} numberOfPieces={200} />
            <div className="text-center">
              <h1 className="lg:text-8xl text-6xl font-extrabold text-gray-900 scale-up-text">
                Happy Birthday, {name}!!
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                <ReactTyped
                  strings={["Wishing you a day filled with love and joy."]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </p>
            </div>
          </div>
        ) : (
          <div className="h-screen flex flex-col w-screen bg">
            {showSecondsOnly ? (
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="lg:text-8xl md:text-7xl text-6xl font-bold text-gray-900 fade-in-out">
                  {timeLeft.seconds}s
                </h1>
              </div>
            ) : (
              <div className="md:text-right lg:text-right lg:m-10 md:m-20 text-center mx-5 my-28 2xl:m-24">
                <h1 className="2xl:text-9xl md:text-8xl text-6xl font-medium text-gray-900">
                  Countdown to Your Birthday!!
                </h1>
                <div className="mt-4 xl:text-6xl lg:text-5xl text-4xl text-gray-600">
                  {timeLeft.days > 0 && `${timeLeft.days}d `}
                  {timeLeft.hours > 0 && `${timeLeft.hours}h `}
                  {timeLeft.minutes > 0 && `${timeLeft.minutes}m `}
                  {timeLeft.seconds > 0 && `${timeLeft.seconds}s`}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Photo Slider Section */}
      <div className="w-full lg:h-screen md:py-10 ">
        <PhotoSlider photos={photos} />
      </div>

      {/* Video Section */}
      <div className="w-full flex flex-col align-middle">
        <h2 className="lg:text-8xl text-4xl  mb-5 font-medium text-gray-800 font-serif py-2 text-center scale-up-text">
          A Special Memory
        </h2>
        <div className="aspect-video" style={{ margin: 0 }}>
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width="100%"
            height="70%"
          />
        </div>
      </div>
    </div>
  );
};

export default BirthdayWish;
