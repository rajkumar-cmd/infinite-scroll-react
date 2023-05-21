import React from "react";
import Style from "../Components/Style/Home.module.css";
import { AuthContext } from "../Context/AuthContextProvided";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import Loading from "./Loading";

const Home = () => {
  const val = React.useContext(AuthContext);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const navigate = useNavigate();
  const handleLogout = () => {
    val.log();
    navigate("/");
  };

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://randomuser.me/api/?results=15");
      const datas = await res.json();
      setData(datas.results);
    })();
  }, []);

  const reFetch = async () => {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const datas = await res.json();
    setData((prevData) => [...prevData, ...datas.results]);
    setLoading(false);
  };
 
  // Infinite Scrolling Logic
  const handleScroll = async () => {
    try {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setTimeout(() => {
          reFetch();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div>
        <div className={Style.navbar}>
        <Text
          fontSize={["1.6rem", "3xl", "4xl", "5xl"]}
          wordBreak={"break-word"}
          color='white'
        >
          Users
        </Text>
        <Button onClick={handleLogout}>Logout</Button>
        </div>
        
        {data?.map((item) => (
          <div key={item["cell"]} className={Style.box}>
            <Flex
              width={"90%"}
              margin={"auto"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text
                fontSize={["1.6rem", "3xl", "4xl", "5xl"]}
                wordBreak={"break-word"}
              >
                {item["name"]["title"]} {item["name"]["first"]}{" "}
                {item["name"]["last"]}
              </Text>
              <Avatar
                name={item["name"]["first"]}
                src={item["picture"]["large"]}
              />
            </Flex>
          </div>
        ))}
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Home;
