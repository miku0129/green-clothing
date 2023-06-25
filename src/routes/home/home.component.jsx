
import Directory from "../../compoments/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://images.unsplash.com/photo-1561365452-adb940139ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=856&q=80",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://plus.unsplash.com/premium_photo-1681914039110-743b9f29a9fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHwlRTclOTQlQjclRTYlODAlQTclMjAlRTclQUMlOTElRTklQTElOTQlMjAlRTglODclQUElRTclODQlQjZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />;
    </div>
  );
};

export default Home;
