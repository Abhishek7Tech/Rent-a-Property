const PROPERTY_DATA = [
  {
    id: 1,
    name: "Cozy House in the City",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.xJhmGcNcyvejMWImNvCbqQHaE8&pid=Api&P=0",
    rentalPrice: "$2,500",
    address: "1234 Main St.",
    area: "1200 sq ft",
    bed: 3,
    bathrooms: 2,
    propertyType: "house",
    location: "Los Angeles, CA",
    areaSqM: "100 x 120",
    popular: true,
    availableFrom: "2023-02-25",
    isLiked: false,
  },
  {
    id: 2,
    name: "Luxury Penthouse with a View",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.U13DgbntUbEJcGrozXKfJAEsDH&pid=Api&P=0",
    rentalPrice: "$4,500",
    address: "5678 Skyline Blvd",
    area: "3000 sq ft",
    bed: 4,
    bathrooms: 4,
    propertyType: "penthouse",
    location: "Miami, FL",
    areaSqM: "200 x 150",
    popular: true,
    availableFrom: "2023-03-01",
    isLiked: false,
  },
  {
    id: 3,
    name: "Spacious Bungalow in the Suburbs",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.6L5sxKXuQe8iqtTOxcKR3QHaFA&pid=Api&P=0",
    rentalPrice: "$3,000",
    address: "9876 Forest Dr",
    area: "2500 sq ft",
    bed: 5,
    bathrooms: 3,
    propertyType: "bungalow",
    location: "Dallas, TX",
    areaSqM: "150 x 100",
    popular: false,
    availableFrom: "2023-03-05",
    isLiked: false,
  },
  {
    id: 4,
    name: "Modern House with a Pool",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.VoxCb5UDY1xxJa6ktnW9CAHaE8&pid=Api&P=0",
    rentalPrice: "$3,500",
    address: "4321 Ocean View Dr",
    area: "1800 sq ft",
    bed: 4,
    bathrooms: 3,
    propertyType: "house",
    location: "San Diego, CA",
    areaSqM: "120 x 150",
    popular: false,
    availableFrom: "2023-03-10",
    isLiked: false,
  },
  {
    id: 5,
    name: "Charming Penthouse in the Heart of the City",
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.yT02PxNcxtHsfdmt5TUrqQHaE8&pid=Api&P=0",
    rentalPrice: "$4,000",
    address: "2468 Broadway Ave",
    area: "2000 sq ft",
    bed: 3,
    bathrooms: 2,
    propertyType: "penthouse",
    location: "New York, NY",
    areaSqM: "180 x 100",
    popular: true,
    availableFrom: "2023-03-15",
    isLiked: false,
  },
  {
    id: 6,
    name: "Spacious House with a View",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.A__owZgTqs6WOXLWHcQ_4QHaE8&pid=Api&P=0",
    rentalPrice: "$3,000",
    address: "7890 Hilltop Dr",
    area: "2000 sq ft",
    bed: 4,
    bathrooms: 3,
    propertyType: "house",
    location: "Seattle, WA",
    areaSqM: "150 x 150",
    popular: true,
    availableFrom: "2023-03-20",
    isLiked: false,
  },
  {
    id: 7,
    name: "Luxury Penthouse with a Private Terrace",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.XE6D-2b98wWmyx9W2HTFsQHaE8&pid=Api&P=0",
    rentalPrice: "$5,000",
    address: "2468 Collins Ave",
    area: "3500 sq ft",
    bed: 5,
    bathrooms: 4,
    propertyType: "penthouse",
    location: "Miami, FL",
    areaSqM: "250 x 150",
    popular: true,
    availableFrom: "2023-03-25",
    isLiked: false,
  },
  {
    id: 8,
    name: "Cozy Bungalow in a Quiet Neighborhood",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.Q9mi5p7qML5KGDd5zVaP2wHaEo&pid=Api&P=0",
    rentalPrice: "$2,000",
    address: "9876 Maple St",
    area: "1200 sq ft",
    bed: 3,
    bathrooms: 2,
    propertyType: "bungalow",
    location: "Portland, OR",
    areaSqM: "100 x 120",
    popular: false,
    availableFrom: "2023-04-01",
    isLiked: false,
  },
  {
    id: 9,
    name: "Stylish House with a Pool and a Jacuzzi",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.bJvJ_F2peK0yudRih3t_WwHaFj&pid=Api&P=0",
    rentalPrice: "$4,000",
    address: "5432 Sunset Blvd",
    area: "2500 sq ft",
    bed: 4,
    bathrooms: 3,
    propertyType: "house",
    location: "Los Angeles, CA",
    areaSqM: "200 x 125",
    popular: true,
    availableFrom: "2023-04-05",
    isLiked: false,
  },
  {
    id: 10,
    name: "Elegant Penthouse with Ocean Views",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.-gJG7Zw6JJLmkewMpLKaswHaEK&pid=Api&P=0",
    rentalPrice: "$6,000",
    address: "1357 Ocean Ave",
    area: "4000 sq ft",
    bed: 6,
    bathrooms: 4,
    propertyType: "penthouse",
    location: "Santa Monica, CA",
    areaSqM: "300 x 150",
    popular: true,
    availableFrom: "2023-04-10",
    isLiked: false,
  },
  {
    id: 11,
    name: "Beautiful House with a Garden",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.UtIif6QfVdR3mb-O-HrX6AHaFL&pid=Api&P=0",
    rentalPrice: "$2,500",
    address: "4321 Main St",
    area: "1800 sq ft",
    bed: 3,
    bathrooms: 2,
    propertyType: "house",
    location: "Chicago, IL",
    areaSqM: "120 x 150",
    popular: false,
    availableFrom: "2023-04-15",
    isLiked: false,
  },
  {
    id: 12,
    name: "Luxurious Penthouse with a Rooftop Pool",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.5DKgGea4eb5JZLFJLbNDfwHaEQ&pid=Api&P=0",
    rentalPrice: "$7,000",
    address: "1234 Fifth Ave",
    area: "5000 sq ft",
    bed: 7,
    bathrooms: 5,
    propertyType: "penthouse",
    location: "New York, NY",
    areaSqM: "400 x 125",
    popular: true,
    availableFrom: "2023-04-20",
    isLiked: false,
  },
  {
    id: 13,
    name: "Cozy Bungalow with a Fireplace",
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.1InzPqF1KK5HeER66ESU6gHaE7&pid=Api&P=0",
    rentalPrice: "$1,800",
    address: "2468 Elm St",
    area: "1000 sq ft",
    bed: 2,
    bathrooms: 1,
    propertyType: "bungalow",
    location: "Boston, MA",
    areaSqM: "100 x 100",
    popular: false,
    availableFrom: "2023-04-25",
    isLiked: false,
  },
  {
    id: 14,
    name: "Modern House with a Home Theater",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.0oD0KqYIlk3KNPB58Yb83gHaEy&pid=Api&P=0",
    rentalPrice: "$3,500",
    address: "7890 Oak St",
    area: "2200 sq ft",
    bed: 4,
    bathrooms: 3,
    propertyType: "house",
    location: "San Francisco, CA",
    areaSqM: "150 x 150",
    popular: true,
    availableFrom: "2023-05-01",
    isLiked: false,
  },
  {
    id: 15,
    name: "Elegant Penthouse with a Private Elevator",
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.4Z69Png2ciOIR5SLHMdtLgHaE6&pid=Api&P=0",
    rentalPrice: "$6,500",
    address: "1357 Fifth Ave",
    area: "4500 sq ft",
    bed: 5,
    bathrooms: 4,
    propertyType: "penthouse",
    location: "Chicago, IL",
    areaSqM: "300 x 150",
    popular: true,
    availableFrom: "2023-05-05",
    isLiked: false,
  },
];

export default PROPERTY_DATA;
