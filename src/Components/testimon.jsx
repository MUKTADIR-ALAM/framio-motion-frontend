import React from 'react'

export default function testimon() {
    
const testimonials = [
    {
      id: 1,
      name: "Kanye West",
      role: "Rapper & Entrepreneur",
      text: "Find God.",
      twitter: "https://twitter.com/kanyewest",
      image: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
    },
    {
      id: 2,
      name: "Tim Cook",
      role: "CEO of Apple",
      text: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
      twitter: "https://twitter.com/tim_cook",
      image: "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
    },
    {
      id: 3,
      name: "Parag Agrawal",
      role: "CEO of Twitter",
      text: "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
      twitter: "https://twitter.com/paraga",
      image: "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
    },
    {
      id: 4,
      name: "Satya Nadella",
      role: "CEO of Microsoft",
      text: "Tortor dignissim convallis aenean et tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.",
      twitter: "https://twitter.com/satyanadella",
      image: "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
    },
    {
      id: 5,
      name: "Dan Schulman",
      role: "CEO of PayPal",
      text: "Quam pellentesque nec nam aliquam sem et tortor consequat id. Enim sit amet venenatis urna cursus.",
      twitter: "https://twitter.com/dan_schulman",
      image: "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
    }
  ];

  // Split testimonials into columns
  const column1 = [testimonials[0], testimonials[1]];
  const column2 = [testimonials[2], testimonials[1]];
  const column3 = [testimonials[3], testimonials[4]];

  return (
    <div>
      
    </div>
  )
}
