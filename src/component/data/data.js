import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../redux/redux";
import Customerreview from "../star";
import './data.css'
import Ourchef from "../ourcheif";
import { Link } from "react-router-dom";

function Food() {


  const store = [

    {
      Albumid: 2,
      id: 1,
      key: "non-veg",
      name: "mutton-biriyani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 140,
      rating: "4.3 / 5",
      url: "https://e1.pxfuel.com/desktop-wallpaper/841/218/desktop-wallpaper-best-4-biryani-on-hip.jpg",
    },
    {
      Albumid: 2,
      id: 2,
      key: "non-veg",
      name: "nalli",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 100,
      rating: "4.4 / 5",
      url: "https://img.freepik.com/free-photo/indian-style-mutton-gosht-masala-indian-lamb-meat-rogan-josh-served-with-naan_466689-91764.jpg",
    },
    {
      Albumid: 2,
      id: 3,
      key: "non-veg",
      name: "chicken-curry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 80,
      rating: "4.2 / 5",
      url: "https://wallpapercave.com/wp/wp7428157.jpg",
    },
    {
      Albumid: 2,
      id: 4,
      key: "non-veg",
      name: "gril-chicken",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 160,
      rating: "4.3 / 5",
      url: "https://w0.peakpx.com/wallpaper/932/946/HD-wallpaper-barbeque-chicken-bbq-chicken-good-wipeyourshit.jpg",
    },
    {
      Albumid: 2,
      id: 5,
      key: "non-veg",
      name: "chicken-rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 140,
      rating: "4.1 / 5",
      url: "https://e0.pxfuel.com/wallpapers/3/575/desktop-wallpaper-chicken-rice-chicken-lollipop-dinner.jpg",
    },
    {
      Albumid: 2,
      id: 6,
      key: "non-veg",
      name: "chicken biriyani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 220,
      rating: "4.8 / 5",
      url: "https://media.istockphoto.com/id/516401834/photo/authentic-chicken-biryani-with-onion-raita.jpg?b=1&s=612x612&w=0&k=20&c=N1pvJOh7sDCKGXNpC7HnvLWcJguMUyfVEAVD-3lrVTU=",
    },
    {
      Albumid: 2,
      id: 7,
      key: "non-veg",
      name: "chicken-bakoda",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 100,
      rating: "4.6 / 5",
      url: "https://images.pexels.com/photos/10292080/pexels-photo-10292080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 2,
      id: 8,
      key: "non-veg",
      name: "Aambur-biriyani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 160,
      rating: "4.8 / 5",
      url: "https://images.pexels.com/photos/11170284/pexels-photo-11170284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 2,
      id: 9,
      key: "non-veg",
      name: "Dindukal-biriyani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 140,
      rating: "4.7 / 5",
      url: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 2,
      id: 10,
      key: "non-veg",
      name: "gril-chicken",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 100,
      rating: "4.6 / 5",
      url: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 11,
      key: "chinese",
      name: "noodles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 70,
      rating: "4.7 / 5",
      url: "https://images.pexels.com/photos/1087906/pexels-photo-1087906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 12,
      key: "chinese",
      name: "crunch-noodle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 160,
      rating: "4.5 / 5",
      url: "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 13,
      key: "chinese",
      name: "spicy chicken",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 240,
      rating: "4.5 / 5",
      url: "https://images.pexels.com/photos/6210774/pexels-photo-6210774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 14,
      key: "chinese",
      name: "special noodles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 110,
      rating: "4.6 / 5",
      url: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 15,
      key: "chinese",
      name: "hot noodles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 130,
      rating: "4.8 / 5",
      url: "https://images.pexels.com/photos/15514412/pexels-photo-15514412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 16,
      key: "chinese",
      name: "chinese chicken",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 190,
      rating: "4.3 / 5",
      url: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 17,
      key: "chinese",
      name: "crisp rice bowl",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 180,
      rating: "4.5 / 5",
      url: "https://images.pexels.com/photos/13770555/pexels-photo-13770555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 18,
      key: "chinese",
      name: "rice bowl",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 190,
      rating: "4.7 / 5",
      url: "https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 19,
      key: "chinese",
      name: "chinese chicken gravy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 310,
      rating: "4.9 / 5",
      url: "https://images.pexels.com/photos/3386854/pexels-photo-3386854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 3,
      id: 20,
      key: "western",
      name: "veg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 120,
      rating: "4.3 / 5",
      url: "https://images.pexels.com/photos/10837800/pexels-photo-10837800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 21,
      key: "western",
      name: "western-biriyani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 320,
      rating: 4.9 / 5,
      url: "https://images.pexels.com/photos/7353379/pexels-photo-7353379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 22,
      key: "western",
      name: "western pack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 49,
      rating: "4.6 / 5",
      url: "https://images.pexels.com/photos/5852331/pexels-photo-5852331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 23,
      key: "western",
      name: "half beef",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 420,
      rating: "4.7 / 5",
      url: "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 24,
      key: "western",
      name: "burger",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 120,
      rating: "4.5 / 5",
      url: "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 25,
      key: "western",
      name: "chicken",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 180,
      rating: "4.4 / 5",
      url: "https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 26,
      key: "western",
      name: " rice with shambor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 190,
      rating: "4.3 / 5",
      url: "https://images.pexels.com/photos/2318966/pexels-photo-2318966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 27,
      key: "western",
      name: "bread & egg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 70,
      rating: "4.6 / 5",
      url: "https://images.pexels.com/photos/11599717/pexels-photo-11599717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 28,
      key: "western",
      name: "0mplate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 70,
      rating: "4.7 / 5",
      url: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 29,
      key: "western",
      name: "bred omplate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 120,
      rating: "4.3 / 5",
      url: "https://images.pexels.com/photos/6294290/pexels-photo-6294290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 4,
      id: 30,
      key: "western",
      name: "slice beef",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 120,
      rating: "4.6 / 5",
      url: "https://images.pexels.com/photos/5774147/pexels-photo-5774147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 1,
      id: 31,
      key: "veg",
      name: "barotta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 70,
      rating: "4.3 / 5",
      url: "https://images.pexels.com/photos/9609857/pexels-photo-9609857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 1,
      id: 32,
      key: veg,
      name: "dosa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: "₹40",
      rating: "4.1 / 5",
      url: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 1,
      id: 33,
      key: "veg",
      name: "fish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 150,
      rating: "4.4 / 5",
      url: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 1,
      id: 34,
      key: "veg",
      name: "chickgen qurea",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 90,
      rating: "4.3 / 5",
      url: "https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      Albumid: 1,
      id: 35,
      key: "veg",
      name: "rice with chapathi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 80,
      rating: "4.0 / 5",
      url: "https://live.staticflickr.com/2847/11128283424_aa7a84fbcc_z.jpg",
    },
    {
      Albumid: 1,
      id: 36,
      key: "veg",
      name: "pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 60,
      rating: "4.4 / 5",
      url: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
    },
    {
      Albumid: 1,
      id: 37,
      key: "veg",
      name: "veg-biriyani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 160,
      rating: "5 / 5",
      url: "https://www.sharmispassions.com/wp-content/uploads/2022/03/VegBiryani8.jpg",
    },
    {
      Albumid: 1,
      id: 38,
      key: "veg",
      name: "Hytrabad biryani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 110,
      rating: "4.2 / 5",
      url: "https://static.wixstatic.com/media/91e241_0cf76aa5613b4055be2f922f71edeaa0~mv2.jpg/v1/fill/w_560,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ustaadi%20Hyderabadi%20Veg%20Biryani.jpg",
    },
    {
      Albumid: 1,
      id: 39,
      key: "veg",
      name: "sambar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: 50,
      rating: "4.4 / 5",
      url: "https://thumbs.dreamstime.com/b/south-indian-dish-sambar-sambhar-sambaaru-sri-lankan-tamil-cuisines-made-pigeon-peas-variant-32061237.jpg",
    },
    {
      Albumid: 1,
      id: 40,
      key: "veg",
      name: "family-pack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
      price: "₹90",
      rating: "4.2 / 5",
      url: "https://www.thecookingacademy.co.uk/wp-content/uploads/2019/12/hp-book-a-class-500x500.jpg",
    },
  ]
  const [input, setInput] = useState("");


const [data,setData]=useState(store);
const dispatch=useDispatch();
function veg(item){
  const veeg=store.filter((e)=>e.key === item)
  setData(veeg)
}
function indian(item){
  const Indian=store.filter((e)=>e.key === item)
  setData(Indian)
}
function west(item){
  const West=store.filter((e)=>e.key === item)
  setData(West)
}
function china(item){
  const China=store.filter((e)=>e.key === item)
  setData(China)
}
function All(){
  const All=store.filter((e)=>e.key)
  setData(All)
}

function Search() {
  const inputValue = input;
  const searching = data.filter((item) => item.name === inputValue);
  setData(searching);
} 


  return (
    <div>
      <div id="buttonss">
        <button onClick={()=>veg("veg")}>vegbrida</button>
        <button onClick={()=>indian("non-veg")}>Nonveg</button>
        <button onClick={()=>west("western")}>western</button>
        <button onClick={()=>china("chinese")}>chinaaa</button>
       
        <button onClick={()=>All("all")}>All</button>
       <div onClick={()=>Search()} type="text" value={input} onChange={(e)=>setInput(e.target.value)}>
        <input list="bok" id="boks" name="boks" 
          placeholder='serach for a restaurant , cuisine or a dish'/>
          <datalist id="bok">
            <option value="family-pack"></option>
            <option value="Hytrabad biryani"></option>
            <option value="rice with chapathi"></option>
            <option value="pizza"></option>
            <option value="sambar"></option>
            <option value="chickgen qurea"></option>
            <option value="chicken-bakoda"></option>
            <option value="briyani"></option>
            <option value="gril-chicken"></option>
            <option value="noodles"></option>
            <option value="bread & egg"></option>
            <option value="slice beef"></option>
            <option value="briyani"></option>
          </datalist>
          </div>

      </div>
      

      <div className=" selva" id="dises">{data.map((e) => {
        return (
          <>
            <div className="container" >
              <div className="card">

                <img className="vss" src={e.url} alt="nehru" />

                <h2 id="stro">{e.name}</h2>
                <h3 id="stro1">price{e.price}. <ins> </ins>
                  <i id="star" class="fa-solid fa-star">4.2</i>
                </h3>

                <div className="back">

                  <h2>chennai,kolathur</h2><i id="lion" class="fa-brands fa-wolf-pack-battalion"></i>
                  <ul>
                    <li>indian briyani</li>
                    <li>chinese food</li>
                    <li>sweets</li>

                   <Link to='/single'> See more</Link>
                  </ul>

                </div>

              </div>
              <button  onClick={()=>dispatch(addTocart(e))} id="btn">Add to cart</button>


              {/* <div className="back">kkkk</div> */}
            </div>


          </>
        )
      })}
      </div>






<div>
<Ourchef/>
<Customerreview/>
</div>
    </div>


  )
}
export default Food