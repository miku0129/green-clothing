
import Directory from "../../compoments/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://plus.unsplash.com/premium_photo-1667762240969-c1b16cf23a1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
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
