"use client";
import Image from "next/image";
import Slider from "react-slick";
import img1 from "../../../../../public/assets/images/slider/1.jpg";
import img2 from "../../../../../public/assets/images/slider/2.jpg";
import img3 from "../../../../../public/assets/images/slider/3.jpg";
import img4 from "../../../../../public/assets/images/slider/4.jpg";
import img5 from "../../../../../public/assets/images/slider/5.jpg";

const SliderData = [
  {
    id: "64dc316f-aabb-481f-ade5-1366ab811b61",
    platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    title: "Dikkiloona",
    contentType: "VOD_SINGLE",
    systemId: "aVrU8tTxBtF",
    slug: "dikkiloona",
    images: img1,
    castAndCrew: [],
    genre: [
      {
        name: "Romance",
      },
      {
        name: "Comedy",
      },
    ],
    tag: [],
    releaseDate: "2021-06-07",
    vod: {
      synopsis:
        "When a power lineman stumbles upon a time machine, he seizes the chance to rewrite his past and electrify his future. But his journey through time might not spark the life he's always dreamed of.",
      category: {
        name: "Movie",
      },
      releaseDate: "2021-06-07",
      activeEncode: {},
      videoDuration: 0,
    },
    feed: {},
    teaser: {},
    program: {},
    shorts: {},
    payPerView: false,
    payPerViewInfo: null,
    subscription: false,
    subscriptionInfo: null,
    analytics: {
      id: "64dc316f-aabb-481f-ade5-1366ab811b61",
      masterId: null,
      title: "Dikkiloona",
      systemId: "aVrU8tTxBtF",
      ownerId: "de2a6cf9-c0a2-4038-8346-c83f7338aa10",
      ownerName: "Media One",
      ownerMasterId: null,
      platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    },
  },
  {
    id: "088ce471-6dec-46d8-ac48-9882cc00596e",
    platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    title: "FIR",
    contentType: "VOD_SINGLE",
    systemId: "p51seGURRSL",
    slug: "fir",
    images: img2,
    castAndCrew: [],
    genre: [
      {
        name: "Action",
      },
      {
        name: "Thriller",
      },
    ],
    tag: [],
    releaseDate: "2022-06-13",
    vod: {
      synopsis:
        "When an average guy is falsely accused of terrorism, his life spirals out of control as the media paints him as pure evil. Can he reclaim his normal life and prove there's more to him than meets the eye?",
      category: {
        name: "Movie",
      },
      releaseDate: "2022-06-13",
      activeEncode: {},
      videoDuration: 0,
    },
    feed: {},
    teaser: {},
    program: {},
    shorts: {},
    payPerView: false,
    payPerViewInfo: null,
    subscription: false,
    subscriptionInfo: null,
    analytics: {
      id: "088ce471-6dec-46d8-ac48-9882cc00596e",
      masterId: null,
      title: "FIR",
      systemId: "p51seGURRSL",
      ownerId: "674f725d-f0ef-40ec-9f2a-369a62530997",
      ownerName: "AP International",
      ownerMasterId: null,
      platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    },
  },
  {
    id: "10742bd9-a962-477b-a5a0-3eefe463d3de",
    platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    title: "Black War - Mission Extreme 2",
    contentType: "VOD_SINGLE",
    systemId: "k1jSD29cJFZ",
    slug: "black-war",
    images: img3,
    castAndCrew: [],
    genre: [
      {
        name: "Action",
      },
      {
        name: "Crime",
      },
      {
        name: "Thriller",
      },
    ],
    tag: [],
    releaseDate: "2023-01-13",
    vod: {
      synopsis:
        "As a terror leader threatens the nation's stability, ADC Nabid pursues their group while navigating a wave of anonymous attacks. Nabid must act fast to stop the terrorists before it's too late.",
      category: {
        name: "Movie",
      },
      releaseDate: "2023-01-13",
      activeEncode: {},
      videoDuration: 0,
    },
    feed: {},
    teaser: {},
    program: {},
    shorts: {},
    payPerView: false,
    payPerViewInfo: null,
    subscription: false,
    subscriptionInfo: null,
    analytics: {
      id: "10742bd9-a962-477b-a5a0-3eefe463d3de",
      masterId: null,
      title: "Black War - Mission Extreme 2",
      systemId: "k1jSD29cJFZ",
      ownerId: "40326873-e90f-4bb1-b542-ee8794820858",
      ownerName: "Cop Creation",
      ownerMasterId: null,
      platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    },
  },
  {
    id: "c08b0907-adaf-4456-9dd1-126e2f8a7169",
    platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    title: "Zee Bangla",
    contentType: "FEED",
    systemId: "ufOzROlNN13",
    slug: "zee-bangla-5b3ebad41b7e",
    images: img4,
    castAndCrew: [],
    genre: [
      {
        name: "Entertainment",
      },
    ],
    tag: [],
    releaseDate: "",
    vod: {},
    feed: {},
    teaser: {},
    program: {},
    shorts: {},
    payPerView: false,
    payPerViewInfo: null,
    subscription: false,
    subscriptionInfo: null,
    analytics: {
      id: "c08b0907-adaf-4456-9dd1-126e2f8a7169",
      masterId: "",
      title: "Zee Bangla",
      systemId: "ufOzROlNN13",
      ownerId: "4c61edc3-30fe-4277-a9e4-6b37818fbcbd",
      ownerName: "Bongo",
      ownerMasterId: null,
      platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    },
  },
  {
    id: "84bee83c-75d1-49e3-ab8e-79b07c5e17fc",
    platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    title: "Nerkonda Paarvai",
    contentType: "VOD_SINGLE",
    systemId: "yItmTQk8TV8",
    slug: "nerkonda-paarvai",
    images: img5,
    castAndCrew: [],
    genre: [
      {
        name: "Drama",
      },
      {
        name: "Action",
      },
      {
        name: "Crime",
      },
      {
        name: "Thriller",
      },
    ],
    tag: [],
    releaseDate: "2019-08-07",
    vod: {
      synopsis:
        "When a trio of unsuspecting young women find themselves entangled in a criminal web, a savvy retired lawyer emerges from the shadows to help them prove their innocence and unravel the truth.",
      category: {
        name: "Movie",
      },
      releaseDate: "2019-08-07",
      activeEncode: {},
      videoDuration: 0,
    },
    feed: {},
    teaser: {},
    program: {},
    shorts: {},
    payPerView: false,
    payPerViewInfo: null,
    subscription: false,
    subscriptionInfo: null,
    analytics: {
      id: "84bee83c-75d1-49e3-ab8e-79b07c5e17fc",
      masterId: null,
      title: "Nerkonda Paarvai",
      systemId: "yItmTQk8TV8",
      ownerId: "de2a6cf9-c0a2-4038-8346-c83f7338aa10",
      ownerName: "Media One",
      ownerMasterId: null,
      platformId: "c3c98d1b-c581-452d-a385-941ca69401e9",
    },
  },
];

const BannerSection = () => {
  return (
    <div className="relative w-full">
      <Slider
        autoplay
        vertical
        verticalSwiping
        arrows
        pauseOnHover={false}
        className="w-full bg-dry">
        {SliderData.map((movie, i) => (
          <div key={i} className="relative rounded overflow-hidden">
            <Image src={movie.images} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSection;
