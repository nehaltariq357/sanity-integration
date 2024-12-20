import { client } from "@/sanity/lib/client";
import Image from "next/image";
interface types {
  name: string;
  age: number;
  _id: string;
}
//get data func,from sanity
const getData = async () => {
  const fetchData = await client.fetch("*[_type == 'student' ] ");
  return fetchData;
};

//get image func, from sanity

const getImage = async () => {
  const carImage = await client.fetch(`*[_type == 'test']{
  name,
  "imageUrl": image.asset->url
}`);
  return carImage;
};

export default async function Home() {
  const data = await getData(); // get data,from sanity
  console.log(data);

  //get image, from sanity

  const display_image = await getImage()
  console.log(getImage)
  return (
    <div>
      <h1>Home</h1>
      <h1>student name, get data from,sanity</h1>
      <ul>
        {data.map((student: types, i: number) => (
          <div key={i}>
            <li> Name:{student.name}</li>
            <li>Age:{student.age}</li>
            <li>ID:{student._id}</li>
          </div>
        ))}
      </ul>
      <h1>get imgae from, sanity</h1>
      <ul>
        {display_image.map((img:any,i:number)=>(
          <div key={i}>
            <li>
              {img.name}
              <Image src={img.imageUrl} alt="pic" width={200} height={200}/>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
