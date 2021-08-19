import CardInfo from "../CardInfo/CardInfo";
import InfoObj from "./InfoObj";
const ContainerInfo = () => {
  const inf = [];
  const coffeInfo = new InfoObj(
    "https://cdn.pixabay.com/photo/2017/01/12/17/30/warm-and-cozy-1975215_960_720.jpg",
    "Te ofrecesmo una gran variedad de cafes los cuales podras disfrutar en tu Hogar"
  );
  inf.push(coffeInfo);
  const localInfo = new InfoObj(
    "https://cdn.pixabay.com/photo/2017/08/07/07/06/coffeehouse-2600877_960_720.jpg",
    "Tambien puedes difrutar un delicioso cafe en nuestro hogar "
  );
  inf.push(localInfo);
  const bookInfo = new InfoObj(
    "https://cdn.pixabay.com/photo/2015/12/08/01/04/library-1082309_960_720.jpg",
    "Somos bastante nerds en nuestro hogar podras tomar algun libro de desarrollo,redes, seguidad y todo lo que se relacione con informaticamente"
  );
  inf.push(bookInfo);

  return (
    <div className="container flex ">
      <div className="row d-flex justify-content-between">
        {inf.map((coffeInfo) => {
          return (
            <CardInfo
              key={coffeInfo.img}
              img={coffeInfo.img}
              desc={coffeInfo.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContainerInfo;
