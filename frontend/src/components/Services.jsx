import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "https://i.pinimg.com/originals/66/0b/b2/660bb2ecc6de42fc36c9140b5a55a10d.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "https://i2.wp.com/www.thirtyhandmadedays.com/wp-content/uploads/2013/09/50th-anniversary-party-2.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "https://cdn.imago-images.com/bild/st/0418925036/s.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "https://live.staticflickr.com/4030/5121431312_158e05992c_b.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "https://th.bing.com/th/id/OIP.u5CQ0k8Jd6KZ6KyyrdWO8QHaEo?rs=1&pid=ImgDetMain",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "https://th.bing.com/th/id/R.aa6627cec345231b8cc69736c2cfa851?rik=VJh5IRdLTL4Hmg&riu=http%3a%2f%2fyoumeandtrends.com%2fwp-content%2fuploads%2f2015%2f11%2fwedding-stage-decoration-with-flowers.jpg&ehk=2h9J7oqWffAAjaUSGprqOEf3OPcl3khR%2fN4IgWpGRis%3d&risl=&pid=ImgRaw&r=0",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2 style={{textDecoration:"underline", fontWeight:"bold"}}>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
